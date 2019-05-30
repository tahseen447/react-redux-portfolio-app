import React from 'react';
import TeacherInput from './TeacherInput'
import { Link } from 'react-router-dom'

const Teachers = ({ teachers }) => {
  const renderTeachers = teachers.map(teacher=>
    <p key={teacher.id}><Link  key={teacher.id} to={`/teachers/${teacher.id}`}>{ teacher.name }</Link></p>
  );
  return (
  <div>
    <h1>Teachers </h1>
    {renderTeachers}
    <TeacherInput />
  </div>
)};

export default Teachers;
