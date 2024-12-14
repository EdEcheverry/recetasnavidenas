import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-Link">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
        <p>BookStock</p>  {/* Nombre de la aplicación */}
      </div>
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Book</Link>
        <Link to="/users">Users</Link>
        <Link to="/register-user">Register User</Link>
      </div>
    </nav>
  );
};

export default Navbar;