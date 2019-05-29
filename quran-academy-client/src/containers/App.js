import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Teachers from '../components/teachers/Teachers'
import Students from '../components/students/Students'

import About from '../components/About'

import {connect} from 'react-redux'
import {fetchStudents, fetchTeachers, updateStudent, addTeacher } from '../actions/actions'

class App extends Component{

  constructor(){
    super()
    this.state={
      students:[],
      teachers:[]
    }
  }

componentDidMount(){
    fetchStudents().then(students => this.setState({
      students: students
    }))
    fetchTeachers().then(teachers =>
      this.setState({
      teachers: teachers
    })
  )
  }

  updateStudent = (student) =>{
    updateStudent(student).then(result => console.log("updated lesson", result))
  }

  addTeacher = teacher => {
    addTeacher(teacher).then(teacher=> console.log("created teacher", teacher))
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
      <Route exact path="/students" render={() => (<Students  students={this.state.students} updateStudent={this.updateStudent}/>)} />
      <Route exact path="/teachers" render={()=>(<Teachers teachers={this.state.teachers} addTeacher={this.addTeacher}/>)} />
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
    fetchTeachers: () => dispatch(fetchTeachers()),
    updateStudent: () => dispatch(updateStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
