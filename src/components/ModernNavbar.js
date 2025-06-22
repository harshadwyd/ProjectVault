import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Nav, Container } from 'react-bootstrap';

const ModernNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
          ❒ ProjectVault
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('liked-projects-section')} className="nav-link">
              Liked Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('carousel-section')} className="nav-link">
              Gallery
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} className="nav-link">
              About
            </Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">
            <motion.div
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;