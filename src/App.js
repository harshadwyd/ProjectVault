import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination, Toast, ToastContainer } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell } from 'react-icons/fa';
import { projectsData } from './projectsData';
import ModernNavbar from './components/ModernNavbar';
import HeroSection from './components/HeroSection';
import SearchFilters from './components/SearchFilters';
import ProjectCard from './components/ProjectCard';
import LikedProjectsSection from './components/LikedProjectsSection';
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
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const toggleLike = (item) => {
    setLikedProjects(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(item.title)) {
        newLiked.delete(item.title);
        setToastMessage(`Removed ${item.title} from liked projects`);
      } else {
        newLiked.add(item.title);
        setToastMessage(`Added ${item.title} to liked projects`);
      }
      setShowToast(true);
      return newLiked;
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(1);

    if (value.length > 1) {
      const filteredSuggestions = projectsData.filter(item => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.projectLead.toLowerCase().includes(value.toLowerCase()) ||
          item.year.toString().includes(value) ||
          item.category.toLowerCase().includes(value.toLowerCase())
        );
      });
      setSuggestions(filteredSuggestions.slice(0, 5));
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
      item.year.toString().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;

    return matchesSearchQuery && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const categories = [...new Set(projectsData.map(item => item.category))];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Simulate loading for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const SkeletonCard = () => (
    <div className="skeleton skeleton-card">
      <div style={{ padding: '1.5rem' }}>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
      </div>
    </div>
  );

  return (
    <>
      <ModernNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchChange={handleSearchChange}
        projectsData={projectsData}
      />

      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchChange={handleSearchChange}
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        isDarkMode={isDarkMode}
      />

      <section id="projects" className="projects-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2>Discover Amazing Projects</h2>
            <p style={{ color: 'var(--text-secondary-light)', fontSize: '1.1rem' }}>
              {filteredProjects.length} projects found
              {selectedCategory && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {currentProjects.length > 0 ? (
                  currentProjects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      isLiked={likedProjects.has(project.title)}
                      onToggleLike={toggleLike}
                      index={index}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      gridColumn: '1 / -1', 
                      textAlign: 'center', 
                      padding: '4rem 0',
                      color: 'var(--text-secondary-light)'
                    }}
                  >
                    <h3>No projects found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Pagination className="pagination">
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
            </motion.div>
          )}
        </Container>
      </section>

      <section id="carousel-section" style={{ padding: '5rem 0', background: 'var(--bg-secondary-light)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2>Explore Our Campus</h2>
            <p style={{ color: 'var(--text-secondary-light)', fontSize: '1.1rem' }}>
              Take a visual journey through Vidyalankar Institute of Technology
            </p>
          </motion.div>
          <CarouselComponent />
        </Container>
      </section>

      <LikedProjectsSection
        likedProjects={likedProjects}
        projectsData={projectsData}
        toggleLike={toggleLike}
        isDarkMode={isDarkMode}
      />

      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide 
          className="toast-notification"
        >
          <Toast.Body>
            <FaBell style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <AboutUsFooter isDarkMode={isDarkMode} />
    </>
  );
}

export default App;