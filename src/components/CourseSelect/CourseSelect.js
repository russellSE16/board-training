import React from 'react';
import './CourseSelect.css';

export default function CourseSelect ({ options, selectedCourse, setCourse, progress, max }) {
    const handleCourseChange = course => {
        setCourse(course);
    }
    
    const getCourseOptions = () => {
        return Object.keys(options).map(courseOption => {
            const courseOptionValue = options[courseOption];
            return (
                <li 
                    key={courseOptionValue}
                    className={selectedCourse === courseOptionValue ? 'active' : ''} 
                    onClick={handleCourseChange.bind(this, courseOptionValue)}
                >{courseOption}</li>
            );
        });
    };

    return (
        <div className="CourseSelect">
            <div className="CourseSelect-options">
                <ul>
                    {getCourseOptions()}    
                </ul>
            </div>
            {selectedCourse && (
                <div className="CourseSelect-progress">
                    <label htmlFor="progress">Course Completion:</label>
                    <progress id="progress" value={progress} max={max}></progress>
                </div>
            )}
        </div>
    );
};