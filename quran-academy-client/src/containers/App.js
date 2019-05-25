import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Teachers from '../components/teachers/Teachers'
import Students from '../components/students/Students'
import Student from '../components/students/Students'

import About from '../components/About'

import {connect} from 'react-redux'
import {fetchStudents, fetchTeachers, updateStudent } from '../actions/actions'

class App extends Component{

  constructor(){
    super()
    this.state={
      students:[],
      teachers:[],
      student: []
    }
  }

componentDidMount(){
    fetchStudents().then(students => this.setState({
      students: students
    }))
    fetchTeachers().then(teachers => this.setState({
      teachers: teachers
    }))
  }

  updateStudent = (student) =>{
    updateStudent(student).then(res=>this.setState({
      student: res
    }))
  }
  render(){
    return (
      <div className="App">
      <h1>Welcome to Quran Academy</h1>
      <div className="sidebar">
      <Students  students={this.state.students} updateStudent={this.updateStudent}/>
      <Teachers teachers={this.state.teachers} />
      </div>
      <div className="main-content">
          <p>{this.state.student.name}</p>
      </div>
      </div>
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
    fetchTeachers: () => dispatch(fetchTeachers()),
    updateStudent: () => dispatch(updateStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
