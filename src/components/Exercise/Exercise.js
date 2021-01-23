import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ScrollIntoView from 'react-scroll-into-view'; 
import './Exercise.css';
import Task from '../Task/Task';

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            // complete: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.countCompletedTasks = this.countCompletedTasks.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }
    handleClick() {
        const toggleOpen = !this.state.open;
        this.setState({ open: toggleOpen });
    }
    countCompletedTasks() {
        const completedTasks = this.props.exercise.tasks.filter(task => task.completed);
        return completedTasks.length;
    }
    handleReset() {
        this.props.resetExercise(this.props.index);
        // this.setState({ complete: false });
    }
    completeTask(taskIndex) {
        let exerciseIsComplete = false;
        const completedTasks = this.countCompletedTasks() + 1;
        if (completedTasks === this.props.exercise.tasks.length) {
            exerciseIsComplete = true;
            // this.setState({ complete: true });
        }
        this.props.updateExerciseStatus(this.props.index, taskIndex, true, exerciseIsComplete);
    }
    renderTasks() {
        if (this.state.open) {
            return (
                <div className="task-list">
                    {this.props.exercise.tasks.map((task, index) => {
                        return (
                            <Task 
                                task={task}
                                index={index} 
                                key={index} 
                                completeTask={this.completeTask} 
                            />
                        );
                    })}
                </div>
            )
        }
    }
    render() {
        const imgSrc = this.state.open ? "https://img.icons8.com/cotton/64/000000/minus--v1.png" : "https://img.icons8.com/cotton/64/000000/plus--v1.png";
        const imgAlt = this.state.open ? 'Minus icon' : 'Plus icon';
        return (
            <div className="exercise" id={'exercise'+ this.props.index}>
                <h2>{this.props.index + 1}. {this.props.exercise.name}</h2>
                {this.props.exercise.completed && <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" alt='Checked checkbox' className='exercise-complete' />}
                <h4>{this.props.exercise.objective}</h4>
                <div className="exercise-completion">
                    <p>Tasks completed: {this.countCompletedTasks()} / {this.props.exercise.tasks.length}</p>
                    <button onClick={this.handleReset}>Reset Progress</button>
                </div>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>               
                    {this.renderTasks()}
                </CSSTransitionGroup>
                <ScrollIntoView selector={'#exercise' + this.props.index} smooth={true}>
                    <img src={imgSrc} alt={imgAlt} onClick={this.handleClick} className="exercise-open-close" />
                </ScrollIntoView>
            </div>
        );
    }
}

export default Exercise;