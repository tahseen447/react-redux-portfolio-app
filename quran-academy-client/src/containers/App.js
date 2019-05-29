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

componentDidMount(){
    this.props.fetchStudents();

    this.props.fetchTeachers();
  }

  updateStudent = (student) =>{
    updateStudent(student).then(result => {
      //somehow update the student here
      let students = this.state.students;
      let index = students.findIndex((obj => obj.id === result.id));
      students[index].lesson = result.lesson

      this.setState({
        students: students
      })
    })
  }

  addTeacher = teacher => {
    addTeacher(teacher).then(teacher=> this.setState({teachers: this.state.teachers.concat(teacher)}))
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
      <Route exact path="/students" render={() => (<Students  students={this.props.students.students} updateStudent={this.updateStudent}/>)} />
      <Route exact path="/teachers" render={()=>(<Teachers teachers={this.props.teachers.teachers} addTeacher={this.addTeacher}/>)} />
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
    updateStudent: (student) => dispatch(updateStudent(student)),
    addTeacher: (teacher) =>dispatch(addTeacher(teacher))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
