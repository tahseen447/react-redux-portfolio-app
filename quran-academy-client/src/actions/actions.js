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
  let student = {...data.student, lesson: data.data}
  let body = JSON.stringify({student: student})
  debugger;
  return fetch('/api/students/' + data.student.id, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
       return res;
   })

}
