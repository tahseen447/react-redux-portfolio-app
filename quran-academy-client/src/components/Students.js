import React from 'react';

const Students = ({ students }) => {
  const renderStudents = students.map((student)=>
  <p key={student.id}>
  Name: {student.name}</p>)
  return (
  <div>
    <h1>Students </h1>
    {renderStudents}
  </div>
)};

export default Students;
