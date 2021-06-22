import React from 'react';
import './Task.css';

export default function Task({ task, index, completeTask }) {
    const [hintOpen, setHintOpen] = React.useState(false);
    const [answer, setAnswer] = React.useState('');
    const [isCorrect, setIsCorrect] = React.useState('');

    const handleClick = () => {
        if (task.current) {
            completeTask(index);
        }
    };
    const handleHintClick = () => {
        setHintOpen(!hintOpen);
    };
    const handleInput = event => {
        setAnswer(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        const userAnswer = answer.toLowerCase();
        const taskAnswer = typeof task.answer === 'string' ? task.answer.toLowerCase() : task.answer.toString();
        if (userAnswer === taskAnswer) {
            setIsCorrect('yes');
        } else {
            setIsCorrect('no');
        }
    };
    
    const divClassName = () => {
        if (task.completed) {
            return "task-complete";
        } else if (task.current) {
            return "task-current";
        } else {
            return "task-incomplete";
        }
    };
    const iconImgSrc = task.completed ? "https://img.icons8.com/plasticine/100/000000/checked-2.png" : "https://img.icons8.com/plasticine/100/000000/unchecked-checkbox.png";
    const iconImgAlt = task.completed ? 'Checked checkbox' : 'Unchecked checkbox';

    return (
        <div className={divClassName()}>
            <div className="task-header">
                <img src={iconImgSrc} alt ={iconImgAlt} onClick={handleClick} />
                <h6>Step {index + 1}</h6>                    
            </div>
            <div className="task-instruction">
                {task.instructionJsx}
                {task.image && <img src={`./img/${task.image}`} alt={task.imageAlt} />}
            </div>
            {task.hintJsx && (
                <div className="task-hint">
                    {hintOpen ? <>
                        <span>HINT: </span>
                        {task.hintJsx}
                    </> : <p className="task-hint-control" onClick={handleHintClick}>Click for hint</p>
                    }
                </div>
            )}   
            {task.inputCaption && (
                <div className="task-input">
                    <form>
                        <label htmlFor={index + 'answer'}>{task.inputCaption}</label>
                        <input id={index + 'answer'} type="text" onChange={handleInput}></input>
                        <input type="submit" value="Submit" onClick={handleSubmit}></input>
                        {isCorrect && <span>{isCorrect === 'yes' ? 'Correct' : 'Incorrect'}</span>}
                    </form>
                </div>
            )}
            {task.infoJsx && (
                <div className="task-info">
                    {task.infoJsx}
                </div>
            )}
        </div>
    );
}
