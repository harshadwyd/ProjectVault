import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = ({ searchQuery, setSearchQuery, handleSearchChange, projectsData }) => {
  const totalProjects = projectsData.length;
  const totalCategories = [...new Set(projectsData.map(item => item.category))].length;
  const currentYear = new Date().getFullYear();

  return (
    <section className="hero-section">
      <div className="hero-background" />
      
      <div className="hero-shapes">
        <div className="floating-shape" />
        <div className="floating-shape" />
        <div className="floating-shape" />
      </div>

      <Container>
        <Row>
          <Col>
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ❒ ProjectVault
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover, explore, and get inspired by innovative academic projects from Vidyalankar Institute of Technology
              </motion.p>

              <motion.div 
                className="hero-search"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <input
                  type="text"
                  className="hero-search-input"
                  placeholder="Search projects, authors, or technologies..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </motion.div>

              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="hero-stat">
                  <span className="hero-stat-number">{totalProjects}+</span>
                  <span className="hero-stat-label">Projects</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">{totalCategories}+</span>
                  <span className="hero-stat-label">Categories</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">{currentYear - 2020}+</span>
                  <span className="hero-stat-label">Years</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;