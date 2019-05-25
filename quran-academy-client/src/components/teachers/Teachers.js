import React from 'react';

const Teachers = ({ teachers }) => {
  const renderTeachers = teachers.map((teacher)=>
  <p key={teacher.id}>
  Name: {teacher.name}</p>)
  return (
  <div>
    <h1>Teachers </h1>
    {renderTeachers}
  </div>
)};

export default Teachers;
