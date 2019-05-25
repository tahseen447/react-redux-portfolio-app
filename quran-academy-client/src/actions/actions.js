export const fetchStudents= ()=>{
  //  return (dispatch) => {
    //  dispatch({ type: 'LOADING_STUDENTS' });
    //  return fetch('/api/students')
    // .then(response => response.json())
    /// .then(students => dispatch({ type: 'FETCH_STUDENTS', payload: students }));
  // };
  return fetch('/api/students').then(response=>response.json())
 }

 export const fetchTeachers= ()=>{
    //  return (dispatch) => {
    //    dispatch({ type: 'LOADING_TEACHERS' });
    //    return fetch('/api/teachers')
    //   .then(response => response.json())
    //   .then(teachers => dispatch({ type: 'FETCH_TEACHERS', payload: teachers }));
    // };
    return fetch('/api/teachers').then(response=>response.json());
  }


export const updateStudent =(data) => {
  let body = JSON.stringify({...data.student, lesson: data.data, lesson_date: new Date()})
  debugger;
  return fetch('/api/students/' + data.student.id, {
        method: 'PUT',
        contentType:'application/json',
        accepts: 'application/json',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
       return res;
   })

}
