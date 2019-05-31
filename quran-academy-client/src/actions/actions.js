export const fetchStudents= ()=>{
   return (dispatch) => {
     dispatch({ type: 'LOADING_STUDENTS' });
     return fetch('/api/students')
    .then(response => response.json())
     .then(students => dispatch({ type: 'FETCH_STUDENTS', payload: students }));
  };
  //return fetch('/api/students').then(response=>response.json())
 }

 export const fetchTeachers= ()=>{
       return (dispatch) => {
       dispatch({ type: 'LOADING_TEACHERS' });
       return fetch('/api/teachers')
      .then(response => response.json())
      .then(teachers => dispatch({ type: 'FETCH_TEACHERS', payload: teachers }));
    };
  //  return fetch('/api/teachers').then(response=>response.json());
  };

export const updateStudent =(data) => {
  return (dispatch) => {
  let body = JSON.stringify({lesson: data.lesson})
  return fetch('/api/students/' + data.student.id, {
        method: 'PUT',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
      .then(student => dispatch({type: 'UPDATE_STUDENT_SUCCESS', payload: student}));
  };
}



export const addTeacher = teacher =>{
  const request = {
    method: 'POST',
    body: JSON.stringify(teacher),
    headers:{
      'Content-Type': 'application/json',
    }
  };
debugger;
return (dispatch) => {
  return fetch('/api/teachers', request).then(response => response.json())
  .then(teacher =>dispatch({type: 'UPDATE_TEACHER_SUCCESS', payload: teacher }))
  };
}
