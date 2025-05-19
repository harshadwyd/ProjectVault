import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHeart } from 'react-icons/fa';
import './LikedProjects.css';

const LikedProjects = ({ likedProjects, projectsData, isDarkMode, toggleLike }) => {
  const likedProjectsArray = projectsData.filter(project => likedProjects.has(project.title));

  // Get unique categories of liked projects
  const uniqueCategories = [...new Set(likedProjectsArray.map(item => item.category))];

  return (
    <div>
      <Card className={`mb-4 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Card.Body>
          <h2 className={`caption ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            Total Liked Projects: {likedProjectsArray.length} | Categories: {uniqueCategories.length}
          </h2>
        </Card.Body>
      </Card>
      <Row>
        {likedProjectsArray.length > 0 ? (
          likedProjectsArray.map((item, index) => (
            <Col md={4} key={index} className='mb-4'>
              <Card className={isDarkMode ? 'dark-mode' : ''}>
                <Card.Body>
                  <Card.Title className={isDarkMode ? 'text-light' : 'text-dark'}>{item.title}</Card.Title>
                  <Card.Subtitle className={`mb-2 ${isDarkMode ? 'text-light' : 'text-muted'}`}>
                    {item.projectLead} ({item.year})
                  </Card.Subtitle>
                  <Card.Text className={isDarkMode ? 'text-light' : 'text-dark'}>{item.abstract}</Card.Text>
                  <button 
                    className='btn btn-danger'
                    onClick={() => toggleLike(item)}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <FaHeart style={{ marginRight: '5px' }} />
                    Unlike
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className='text-center'>
            <p>No liked projects found.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default LikedProjects;
