import React from 'react'
import { Link } from 'react-router-dom'
import './student.css'

const Students= ({students}) => {
  const renderStudents = students.map(student =>
    <p key={student.id}><Link  key={student.id} to={`/students/${student.id}`}>{ student.name }</Link></p>
  );
  return (
    <div className="studentContainer">
      {renderStudents}
    </div>
  )
}

export default Students;
