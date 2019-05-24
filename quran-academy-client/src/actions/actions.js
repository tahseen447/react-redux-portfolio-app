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
     return (dispatch) => {
       dispatch({ type: 'LOADING_TEACHERS' });
       return fetch('/api/teachers')
      .then(response => response.json())
      .then(teachers => dispatch({ type: 'FETCH_TEACHERS', payload: teachers }));
    };
  }
