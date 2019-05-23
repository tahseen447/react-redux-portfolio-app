import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Teachers from '../components/Teachers'
import Students from '../components/Students'
import About from '../components/About'


function App() {
  return (
    <Router>
    <React.Fragment>
    <div className="App">
    <h1>Welcome to Quran Academy</h1>
    <NavBar />
    <Route exact path="/" component={Home}/>
    <Route exact path="/students" component={Students}/>
    <Route exact path="/teachers" component={Teachers}/>
    <Route exact path="/about" component={About}/>
    </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
