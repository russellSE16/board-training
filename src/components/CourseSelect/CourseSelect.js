import React from 'react';
import './CourseSelect.css';

class CourseSelect extends React.Component {
    getOptionClass(option) {
        if (this.props.selectedCourse === option) {
            return 'active';
        }
        else {
            return '';
        }
    }
    handleCourseChange(courseOption) {
        this.props.setCourse(courseOption);
    }
    renderCourseOptions() {
        return Object.keys(this.props.options).map(courseOption => {
            const courseOptionValue = this.props.options[courseOption];
            return (
                <li 
                    key={courseOptionValue}
                    className={this.getOptionClass(courseOptionValue)} 
                    onClick={this.handleCourseChange.bind(this, courseOptionValue)}>
                {courseOption}</li>
            );
        });
    }
    renderProgressBar() {
        if (this.props.selectedCourse) {
            return (
                <div className="CourseSelect-progress">
                    <label htmlFor="progress">Course Completion:</label>
                    <progress id="progress" value={this.props.progress} max={this.props.max}></progress>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="CourseSelect">
                <div className="CourseSelect-options">
                    <ul>
                        {this.renderCourseOptions()}    
                    </ul>
                </div>
                {this.renderProgressBar()}
            </div>
        );
    }
}

export default CourseSelect;