import React from 'react'
import Student from './Student'

const Students= ({students, updateStudent}) => {
  const renderStudents =  students.map(student => <Student key={student.id} student={student} updateStudent={updateStudent}/>)
  return (
  <ul>
    {renderStudents}
    </ul>
  )
}

export default Students;
