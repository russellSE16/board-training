import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import logo from './Board Logo.jpg';
import './App.css';
import Training from './data';
import CourseSelect from './components/CourseSelect/CourseSelect';
import Exercise from './components/Exercise/Exercise';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.courseOptions = {
      'Data Modelling' : 'data-modelling',
      'Analysis & Reporting' : 'analysis-reporting',
      'Planning & Procedures' : 'planning-procedures'
    }
    this.state = {
      selectedCourse: {exercises: []},
      courseProgress: 0
    }
    this.loadCourseData = this.loadCourseData.bind(this);
    this.setCourse = this.setCourse.bind(this);
    this.updateExerciseStatus = this.updateExerciseStatus.bind(this);
    this.resetExercise = this.resetExercise.bind(this);
  }
  loadCourseData(courseIndex) {
    const courseData = Training.courses[courseIndex];
    const completedExercises = courseData.exercises.filter(exercise => exercise.completed); 
    const progress = completedExercises.length;
    this.setState({ 
      selectedCourse: courseData,
      courseProgress: progress
    });
  }
  setCourse(course) {
    const courseIndex = Training.courses.findIndex(element => element.title === course);
    if (courseIndex === -1) {
      return;
    }
    Training.courses[courseIndex].exercises.forEach(exercise => {
      if (exercise.completed === undefined) {
        exercise.completed = false;
      }
      exercise.tasks.forEach((task, index) => {
        if (task.completed === undefined) {
          task.completed = false;
        }
        if (task.current === undefined) {
          if (index === 0) {
            task.current = true;
          } else {
            task.current = false;
          }
        }
      })
    })
    this.loadCourseData(courseIndex);
  }
  updateExerciseStatus(exerciseIndex, taskIndex, taskIsComplete, exerciseIsComplete) {
    const courseIndex = Training.courses.findIndex(element => element.title === this.state.selectedCourse.title);
    Training.courses[courseIndex].exercises[exerciseIndex].tasks[taskIndex].completed = taskIsComplete;
    Training.courses[courseIndex].exercises[exerciseIndex].tasks[taskIndex].current = !taskIsComplete;
    if (!exerciseIsComplete) {
      Training.courses[courseIndex].exercises[exerciseIndex].tasks[taskIndex + 1].current = taskIsComplete;
    }
    Training.courses[courseIndex].exercises[exerciseIndex].completed = exerciseIsComplete;
    this.loadCourseData(courseIndex);
  }
  resetExercise(exerciseIndex) {
    const courseIndex = Training.courses.findIndex(element => element.title === this.state.selectedCourse.title);
    Training.courses[courseIndex].exercises[exerciseIndex].tasks.forEach((task, index) => {
      task.completed = false;
      if (index === 0) {
        task.current = true;
      } else {
        task.current = false;
      }
    });
    Training.courses[courseIndex].exercises[exerciseIndex].completed = false;
    this.loadCourseData(courseIndex);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.selectedCourse.title === undefined && <h1>Classroom Training Guide</h1>}
        </header>
        <CourseSelect
          options={this.courseOptions} 
          selectedCourse={this.state.selectedCourse.title} 
          setCourse={this.setCourse}
          progress={this.state.courseProgress}
          max={this.state.selectedCourse.exercises.length} 
        />
        <div className="exercise-list">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>                           
              {this.state.selectedCourse.exercises.map((exercise, index) => {
                return (
                  <Exercise 
                    exercise={exercise}
                    index={index} 
                    key={index} 
                    updateExerciseStatus={this.updateExerciseStatus}
                    resetExercise={this.resetExercise} 
                  />
                  );
              })}
          </CSSTransitionGroup>
        </div>      
      </div>
    );
  }
}

export default App;
