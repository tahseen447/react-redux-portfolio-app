import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Teachers from '../components/Teachers'
import Students from '../components/Students'
import About from '../components/About'

import {connect} from 'react-redux'
import {fetchStudents, fetchTeachers } from '../actions/actions'


let students = [
  { id: 1, name: 'maryam', age: 4, gender: "F" },
  { id: 2, name: 'ali', age: 2, gender: "M" },
  { id: 3, name: 'ibrahim', age: 6, gender: "M" },
  { id: 4, name: 'ilyas', age: 4, gender: "M" }
]

let teachers = [
  {id:1, name: 'Sheikh Anas Daghameen'},
  {id:2, name: 'Sheikh Ahmed Daghameen'},
  {id:3, name: 'Ms Bushra'}
]

class App extends Component{

  constructor(){
    super()
    this.state={
      students:[],
      teachers:[]
    }
  }

componentDidMount(){
    debugger;
    fetchStudents().then(students => this.setState({
      students: students
    }))
  }

  render(){
    return (
      <div className="App">
      <h1>Welcome to Quran Academy</h1>
      <div className="sidebar">
      <Students  students={this.state.students} />
      <Teachers teachers={this.state.teachers} />
      </div>
      <div className="main-content">
          <p>main content</p>
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
    fetchTeachers: () => dispatch(fetchTeachers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
