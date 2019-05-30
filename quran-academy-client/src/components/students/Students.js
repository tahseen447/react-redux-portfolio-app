import React from 'react'
import { Link } from 'react-router-dom'

const Students= ({students}) => {
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
