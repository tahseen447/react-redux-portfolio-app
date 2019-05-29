import React from 'react';
import TeacherInput from './TeacherInput'
import Teacher from './Teacher'

const Teachers = ({ teachers, addTeacher }) => {
  const renderTeachers = teachers.map((teacher)=>
  <Teacher key={teacher.id} teacher={teacher} />
)
  return (
  <div>
    <h1>Teachers </h1>
    {renderTeachers}
    <TeacherInput addTeacher = {addTeacher}/>
  </div>
)};

export default Teachers;
