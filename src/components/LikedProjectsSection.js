import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const LikedProjectsSection = ({ likedProjects, projectsData, toggleLike, isDarkMode }) => {
  const likedProjectsArray = projectsData.filter(project => likedProjects.has(project.title));
  const uniqueCategories = [...new Set(likedProjectsArray.map(item => item.category))];

  return (
    <section id="liked-projects-section" className="liked-projects-section">
      <Container>
        <div className="liked-projects-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your Liked Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary-light)' }}
          >
            Keep track of projects that inspire you
          </motion.p>
        </div>

        <motion.div 
          className="liked-projects-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{likedProjectsArray.length}</span>
              <span className="stat-label">Liked Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{uniqueCategories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {likedProjectsArray.length > 0 
                  ? Math.round(likedProjectsArray.reduce((sum, p) => sum + parseInt(p.year), 0) / likedProjectsArray.length)
                  : 0
                }
              </span>
              <span className="stat-label">Avg Year</span>
            </div>
          </div>
        </motion.div>

        <Row>
          {likedProjectsArray.length > 0 ? (
            <div className="projects-grid">
              {likedProjectsArray.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  isLiked={true}
                  onToggleLike={toggleLike}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ padding: '4rem 0' }}
              >
                <h3 style={{ color: 'var(--text-secondary-light)', marginBottom: '1rem' }}>
                  No liked projects yet
                </h3>
                <p style={{ color: 'var(--text-secondary-light)' }}>
                  Start exploring projects and like the ones that inspire you!
                </p>
              </motion.div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default LikedProjectsSection;