import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './header.css'; // Import your CSS here

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <Navbar className={`navbar ${isDarkMode ? 'dark-mode' : ''}`} expand="lg">
      <Navbar.Brand href="#home" className="text-white">VIT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-transparent border-0" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
          <Nav.Link href="#liked-projects-section" className="text-white">Liked Projects</Nav.Link>
          <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Dark Mode"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="ms-3 text-white d-flex align-items-center" // Align text and switch
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
