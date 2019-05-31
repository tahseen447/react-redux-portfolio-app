import React from 'react'

const Teacher = ({match, teachers}) => {
  const id = match.params.teacherId -1;
  const teacher = teachers[id]
  return (
    <div key={teacher.id}>
    <p>Name: {teacher.name}</p>
    <p>Age: {teacher.age}</p>
    <p>Gender: {teacher.gender} </p>
    <p>Bio: {teacher.bio} </p>
    <p>Image: {teacher.image} </p>
  </div>
)
}

export default Teacher;
