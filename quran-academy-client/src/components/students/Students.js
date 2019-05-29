import React from 'react'
import Student from './Student'
import { Link } from 'react-router-dom'

const Students= ({students, updateStudent}) => {
//  const renderStudents =  students.map(student => <Student key={student.id} student={student} updateStudent={updateStudent}/>)
const renderStudents = students.map(student =>
    <p key={student.id}><Link  key={student.id} to={`/students/${student.id}`}>{ student.name }</Link></p>
  );
  return (
  <ul>
    {renderStudents}
    </ul>
  )
}

export default Students;
