import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const SearchFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  handleSearchChange, 
  suggestions, 
  handleSuggestionClick,
  selectedCategory, 
  setSelectedCategory, 
  categories,
  isDarkMode 
}) => {
  return (
    <section className="search-filters-section">
      <Container>
        <Row>
          <Col>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search by title, author, or year..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              
              {suggestions.length > 0 && (
                <motion.div 
                  className="suggestions-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {suggestions.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      <strong>{item.title}</strong>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)' }}>
                        {item.projectLead} • {item.year}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="filter-chips">
              <motion.button
                className={`filter-chip ${selectedCategory === '' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                All Categories
              </motion.button>
              
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchFilters;