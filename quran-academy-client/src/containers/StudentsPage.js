import React from 'react';
import { Route } from 'react-router-dom';
import Students from '../components/students/Students';
import Student from '../components/students/Student';

const StudentsPage = ({ match, students, updateStudent }) => (
  <div>
    <Students students={students} updateStudent={updateStudent}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Student from the list.</h3>
    )}/>
    <Route path={`${match.url}/:studentId`} render={routerProps => <Student students={students} updateStudent={updateStudent}{...routerProps} /> }/>
  </div>
)

export default StudentsPage;
