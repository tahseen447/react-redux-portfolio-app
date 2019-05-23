
import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  color: 'blue',
  textDecoration: 'underline'
}
const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/students" >Students</NavLink>
    <NavLink to="/teachers">Teachers</NavLink>
    <NavLink to="/about" >About</NavLink>
    </div>
  );
};

export default NavBar;
