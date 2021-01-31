import React from 'react';
import './Task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hintOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleHintClick = this.handleHintClick.bind(this);
    }
    handleClick() {
        if (this.props.task.current) {
            this.props.completeTask(this.props.index);
        }
    }
    handleHintClick() {
        const toggleOpen = !this.state.hintOpen;
        this.setState({ hintOpen: toggleOpen });
    }
    renderHint() {
        if (this.props.task.hintJsx) {
            if (this.state.hintOpen) {
                return (
                    <div className="task-hint-open">
                        <span>HINT: </span>
                        {this.props.task.hintJsx}
                    </div>
                );
            } else {
                return (
                    <div className="task-hint" >
                        <p onClick={this.handleHintClick}>Click for hint</p>
                    </div>
                );
            }
        }
    }
    render() {
        const divClassName = () => {
            if (this.props.task.completed) {
                return "task-complete";
            } else if (this.props.task.current) {
                return "task-current";
            } else {
                return "task-incomplete";
            }
        };
        const iconImgSrc = this.props.task.completed ? "https://img.icons8.com/plasticine/100/000000/checked-2.png" : "https://img.icons8.com/plasticine/100/000000/unchecked-checkbox.png";
        const iconImgAlt = this.props.task.completed ? 'Checked checkbox' : 'Unchecked checkbox';

        return(
            <div className={divClassName()}>
                <div className="task-header">
                    <img src={iconImgSrc} alt ={iconImgAlt} onClick={this.handleClick} />
                    <h6>Step {this.props.index + 1}</h6>                    
                </div>
                <div className="task-instruction">
                    {this.props.task.instructionJsx}
                    {this.props.task.image && <img src={`./img/${this.props.task.image}`} alt={this.props.task.imageAlt} />}
                </div>
                {this.renderHint()}
            </div>
        );
    }
}

export default Task;