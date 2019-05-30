import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Teachers from '../components/teachers/Teachers'
import StudentsPage from './StudentsPage'

import About from '../components/About'

import {connect} from 'react-redux'

import {fetchStudents, fetchTeachers, updateStudent, addTeacher } from '../actions/actions'

class App extends Component{


componentDidMount(){
    this.props.fetchStudents()
    //.then(result=> { this.setState({students: result.payload})});
    this.props.fetchTeachers()
    //.then(result => this.setState({teachers: result.payload}));
  }

  updateStudent = (student) =>{
    this.props.updateStudent(student)
}

  addTeacher = teacher => {
    this.props.addTeacher(teacher).then(teacher=> this.props.teachers.concat(teacher));// this.setState({teachers: this.state.teachers.concat(teacher) }));
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
      <Route exact path="/teachers" render={()=>(<Teachers teachers={this.props.teachers} addTeacher={this.addTeacher}/>)} />
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
