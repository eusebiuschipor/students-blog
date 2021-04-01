import React from 'react';
import Button from '../Button/Button';

const Student = (props) => {
    const getRandomAge = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    return (
        <div 
            className="card">
            <h1 style={{ color: props.color }}>
                {props.firstName} {props.lastName}
            </h1>
            <h3><strong>Course:</strong> {props.course}</h3>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Age:</strong> {getRandomAge(18, 99)}</p>
            <Button 
                click={props.toggleColorClick} 
                text="Trigger color"
            />
        </div>
    );
}
  
export default Student;
  