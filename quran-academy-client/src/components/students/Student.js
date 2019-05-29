import React from 'react'
import StudentInput from './StudentInput'

const Student = ({student, updateStudent}) => {
  return (
    <div key={student.id}>
    <p>Name: {student.name}</p>
    <p>Age: {student.age}</p>
    <p>Gender: {student.gender} </p>
    <p>Current Lesson: {student.lesson} </p>
    <StudentInput student={student} updateStudent={updateStudent}/>
  </div>
)
}

export default Student;
