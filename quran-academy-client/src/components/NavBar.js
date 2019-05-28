
import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  color: 'blue',
  textDecoration: 'underline',
  padding: 5,
  margin: 5
}
const NavBar = () => {
  return (
    <div className="navbar">
    <NavLink to="/" activeStyle={link }>Home</NavLink>
    <NavLink to="/students" activeStyle={link}>Students</NavLink>
    <NavLink to="/teachers" activeStyle={link}>Teachers</NavLink>
    <NavLink to="/about" activeStyle={link}>About</NavLink>
    </div>
  );
};

export default NavBar;
