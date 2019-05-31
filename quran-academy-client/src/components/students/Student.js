import React from 'react'
import StudentInput from './StudentInput'

const Student = ({match, students}) => {
  const id = match.params.studentId -1;
  const student = students[id]
  return (
    <div key={student.id}>
    <p>Name: {student.name}</p>
    <p>Age: {student.age}</p>
    <p>Gender: {student.gender} </p>
    <p>Current Lesson: {student.lesson} </p>
    <StudentInput student={student} />
  </div>
)
}

export default Student;
