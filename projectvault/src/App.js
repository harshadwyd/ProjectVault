import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Form, Pagination, Toast, ToastContainer } from 'react-bootstrap';
import { FaHeart, FaLinkedin, FaBell } from 'react-icons/fa';
import { projectsData } from './projectsData';
import LikedProjects from './LikedProjects';
import AboutUsFooter from './AboutUsFooter';
import CarouselComponent from './CarouselComponent';
import './App.css';

function App() {
  const [likedProjects, setLikedProjects] = useState(new Set());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const itemsPerPage = 15;

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const toggleLike = (item) => {
    setLikedProjects(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(item.title)) {
        newLiked.delete(item.title);
        setToastMessage(`Unliked ${item.title}`);
      } else {
        newLiked.add(item.title);
        setToastMessage(`Liked ${item.title}`);
      }
      setShowToast(true);
      return newLiked;
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      const filteredSuggestions = projectsData.filter(item => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.projectLead.toLowerCase().includes(value.toLowerCase()) ||
          item.year.toString().includes(value)
        );
      });
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.title);
    setSuggestions([]);
  };

  const filteredProjects = projectsData.filter(item => {
    const matchesSearchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.projectLead.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.year.toString().includes(searchQuery);

    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;

    return matchesSearchQuery && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const categories = [...new Set(projectsData.map(item => item.category))];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Navbar className={`navbar ${isDarkMode ? 'dark-mode' : ''}`} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">❒ ProjectVault</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => document.getElementById('liked-projects-section').scrollIntoView({ behavior: 'smooth' })} 
              className="text-white"
            >
              Liked Projects
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link 
              onClick={() => document.getElementById('carousel-section').scrollIntoView({ behavior: 'smooth' })} 
              className="text-white"
            >
              Photos
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
          </Nav>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Dark Mode"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="ms-3 text-white" 
          />
        </Container>
      </Navbar>

      <Container className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1 className={isDarkMode ? 'text-light' : 'text-dark'}>Welcome to ❒ ProjectVault </h1>
        <p className={`text-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>A Project Initiative By Vidyalankar Institute Of Technology</p>

        <div className="position-relative mb-4">
          <Form.Control 
            type="text" 
            placeholder="Search by title, project lead, or year..."
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleSuggestionClick(item)}>
                  <strong className={isDarkMode ? 'text-light' : 'text-dark'}>{item.title}</strong> - 
                  <span className={isDarkMode ? 'text-light' : 'text-dark'}>{item.projectLead}</span> ({item.year})
                </li>
              ))}
            </ul>
          )}
        </div>

        <Form.Select 
          aria-label="Select Category" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          className="mb-4"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </Form.Select>

        <h2 id='projects' className={isDarkMode ? 'text-light' : 'text-dark'}>Projects</h2>
        <Row>
          {currentProjects.length > 0 ? (
            currentProjects.map((item, index) => (
              <Col md={4} key={index} className='mb-4'>
                <Card className={isDarkMode ? 'dark-mode' : ''}>
                  <Card.Body>
                    <Card.Title className={isDarkMode ? 'text-light' : 'text-dark'}>{item.title}</Card.Title>
                    <Card.Subtitle className={`mb-2 ${isDarkMode ? 'text-light' : 'text-muted'}`}>
                      {item.projectLead} ({item.year})
                    </Card.Subtitle>
                    <Card.Text className={isDarkMode ? 'text-light' : 'text-dark'}>{item.abstract}</Card.Text>

                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center">
                      <FaLinkedin style={{ marginRight: '5px', color: '#0077b5' }} />
                      View LinkedIn
                    </a>

                    <button 
                      className={`btn ${likedProjects.has(item.title) ? 'btn-danger' : 'btn-outline-primary'}`} 
                      onClick={() => toggleLike(item)}
                      style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
                    >
                      <FaHeart style={{ marginRight: '5px', color: likedProjects.has(item.title) ? 'red' : 'gray' }} />
                      {likedProjects.has(item.title) ? 'Unlike' : 'Like'}
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className='text-center'>
              <p className={isDarkMode ? 'text-light' : 'text-dark'}>No projects found.</p>
            </Col>
          )}
        </Row>

        <Pagination className="justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item 
              key={index} 
              active={index + 1 === currentPage} 
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>

        <h2 id="carousel-section" className={isDarkMode ? 'text-light' : 'text-dark'}></h2>
        <CarouselComponent />

        <h2 id='liked-projects-section' className={isDarkMode ? 'text-light' : 'text-dark'}>Liked Projects</h2>
        <LikedProjects 
          likedProjects={likedProjects} 
          projectsData={projectsData} 
          isDarkMode={isDarkMode} 
          toggleLike={toggleLike}
        />

        <ToastContainer position="top-end" className="p-3">
          <Toast 
            show={showToast} 
            onClose={() => setShowToast(false)} 
            delay={3000} 
            autohide 
            className={`toast-notification ${showToast ? 'show' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
          >
            <Toast.Body>
              <FaBell style={{ marginRight: '10px', verticalAlign: 'middle' }} />
              {toastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>

      <AboutUsFooter isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
