import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import TeachersPage from './TeachersPage'
import StudentsPage from './StudentsPage'

import About from '../components/About'

import {connect} from 'react-redux'

import {fetchStudents, fetchTeachers } from '../actions/actions'

class App extends Component{


componentDidMount(){
    this.props.fetchStudents();
    this.props.fetchTeachers();
  }

  render(){
    return (
      <Router>
      <div className="App">
      <h1>Welcome to Quran Academy</h1>
      <NavBar />
      <div >
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path='/students' render={ routerProps => <StudentsPage {...routerProps}  students={this.props.students} />} />
      <Route path='/teachers' render={ routerProps => < TeachersPage {...routerProps} teachers={this.props.teachers} />} />
      </div>
      </div>
      </Router>
    )
  }
};

const mapStateToProps = state => {
  return {
      students: state.students,
    teachers: state.teachers
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    fetchStudents: () => dispatch(fetchStudents()),
    fetchTeachers: () => dispatch(fetchTeachers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
