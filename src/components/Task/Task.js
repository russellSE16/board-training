import React from 'react';
import './Task.css';

export default function Task({ task, index, completeTask }) {
    const [hintOpen, setHintOpen] = React.useState(false);

    const handleClick = () => {
        if (task.current) {
            completeTask(index);
        }
    };
    const handleHintClick = () => {
        setHintOpen(!hintOpen);
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
            {task.hintJsx && hintOpen ? (
                <div className="task-hint-open">
                    <span>HINT: </span>
                    {task.hintJsx}
                </div>
            ) : (
                <div className="task-hint" >
                    <p onClick={handleHintClick}>Click for hint</p>
                </div>
            )}
        </div>
    );
};