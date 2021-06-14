import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ScrollIntoView from 'react-scroll-into-view'; 
import './Exercise.css';
import Task from '../Task/Task';

export default function Exercise ({ exercise, index, isOpen, openExercise, resetExercise, updateExerciseStatus}) {
    const handleClick = () => {
        openExercise(isOpen ? null : index);    
    };
    const handleReset = () => {
        resetExercise(index);
    };
    const countCompletedTasks = () => {
        const completedTasks = exercise.tasks.filter(task => task.completed);
        return completedTasks.length;
    };
    const completeTask = taskIndex => {
        let exerciseIsComplete = false;
        const completedTasks = countCompletedTasks() + 1;
        if (completedTasks === exercise.tasks.length) {
            exerciseIsComplete = true;
        }
        updateExerciseStatus(index, taskIndex, true, exerciseIsComplete);
    };

    const imgSrc = isOpen ? "https://img.icons8.com/cotton/64/000000/minus--v1.png" : "https://img.icons8.com/cotton/64/000000/plus--v1.png";
    const imgAlt = isOpen ? 'Minus icon' : 'Plus icon';

    return ( 
        <div className="exercise" id={'exercise' + index}>
            <h2>{index + 1}. {exercise.name}</h2>
            {exercise.completed && <img src="https://img.icons8.com/plasticine/100/000000/checked-2.png" alt='Checked checkbox' className='exercise-complete' />}
            <h4>{exercise.objective}</h4>
            <div className="exercise-completion">
                <p>Tasks completed: {countCompletedTasks()} / {exercise.tasks.length}</p>
                <button onClick={handleReset}>Reset Progress</button>
            </div>
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >               
                {isOpen && (
                    <div className="task-list">
                        {exercise.tasks.map((task, index) => {
                            return (
                                <Task 
                                    task={task}
                                    index={index} 
                                    key={index} 
                                    completeTask={completeTask} 
                                />
                            );
                        })}
                    </div>
                )}
            </CSSTransitionGroup>
            <ScrollIntoView selector={'#exercise' + index} smooth={true}>
                <img 
                    src={imgSrc} 
                    alt={imgAlt} 
                    onClick={handleClick} 
                    className="exercise-open-close" 
                />
            </ScrollIntoView>
        </div>
    );
};