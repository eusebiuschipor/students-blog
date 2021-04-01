import React, { useState } from 'react';
import Student from '../Student/Student';
import studentsListData from '../../data/students-list-data';
import Button from '../Button/Button';

const StudentsList = () => {
    const [blackText, setBlackText] = useState(false);
    const [showStudents, setShowStudents] = useState(false);
    let students = null;

    const toggleColor = () => {
        setBlackText(!blackText);
    }

    const handleClickToggleShowStudents = () => {
        setShowStudents(!showStudents);
    }

    if (showStudents) {
        students = studentsListData.map((student) => (
            <Student
                key={student.id}
                firstName={student.firstName} 
                lastName={student.lastName} 
                course={student.course} 
                email={student.email}
                color={!blackText ? student.color : 'black'} 
                toggleColorClick={toggleColor} />
        ));
    } else {
        students = null;
    }

    return (
        <>
            <Button 
                click={toggleColor} 
                text="Trigger color"
            />
            <Button 
                click={handleClickToggleShowStudents} 
                text={showStudents ? "Hide students" : "Show students"}
                backgroundColor={showStudents ? "green" : "red"}
            />
            {students}
        </>
    );
}
  
export default StudentsList;