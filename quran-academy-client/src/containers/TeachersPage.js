import React from 'react';
import { Route } from 'react-router-dom';
import Teachers from '../components/teachers/Teachers';
import Teacher from '../components/teachers/Teacher';

const TeachersPage = ({ match, teachers }) => (
  <div>
    <Teachers teachers={teachers} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Teacher from the list.</h3>
    )}/>
    <Route path={`${match.url}/:teacherId`} render={routerProps => <Teacher teachers={teachers} {...routerProps} /> }/>
  </div>
)

export default TeachersPage;
