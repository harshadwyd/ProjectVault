import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaCode, FaRocket, FaBrain, FaShieldAlt, FaMobile, FaLeaf } from 'react-icons/fa';

const ProjectCard = ({ project, isLiked, onToggleLike, index }) => {
  const getCategoryIcon = (category) => {
    const iconMap = {
      'Artificial Intelligence': FaBrain,
      'Robotics': FaRocket,
      'Web Development': FaCode,
      'Mobile App Development': FaMobile,
      'Cybersecurity': FaShieldAlt,
      'IoT': FaLeaf,
      'Data Science': FaBrain,
      'Machine Learning': FaBrain,
      'Software Development': FaCode,
      'Healthcare Technology': FaLeaf,
      'Automotive Technology': FaRocket,
      'Security Systems': FaShieldAlt,
    };
    
    const IconComponent = iconMap[category] || FaCode;
    return <IconComponent className="project-card-icon" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Artificial Intelligence': '#8b5cf6',
      'Robotics': '#f59e0b',
      'Web Development': '#3b82f6',
      'Mobile App Development': '#10b981',
      'Cybersecurity': '#ef4444',
      'IoT': '#06b6d4',
      'Data Science': '#8b5cf6',
      'Machine Learning': '#8b5cf6',
      'Software Development': '#3b82f6',
      'Healthcare Technology': '#10b981',
      'Automotive Technology': '#f59e0b',
      'Security Systems': '#ef4444',
    };
    
    return colorMap[category] || '#6b7280';
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div 
        className="project-card-header"
        style={{ 
          background: `linear-gradient(135deg, ${getCategoryColor(project.category)}22, ${getCategoryColor(project.category)}44)`
        }}
      >
        <div className="project-card-category">
          {project.category}
        </div>
        
        <motion.button
          className={`project-card-like ${isLiked ? 'liked' : ''}`}
          onClick={() => onToggleLike(project)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaHeart />
        </motion.button>

        {getCategoryIcon(project.category)}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        
        <div className="project-card-author">
          <span>{project.projectLead}</span>
          <span className="project-card-year">{project.year}</span>
        </div>

        <p className="project-card-abstract">{project.abstract}</p>

        <div className="project-card-actions">
          <a 
            href={project.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-custom"
          >
            <FaLinkedin />
            View Profile
          </a>
          
          <motion.button
            className={`btn-like ${isLiked ? 'liked' : ''}`}
            onClick={() => onToggleLike(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart />
            {isLiked ? 'Liked' : 'Like'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;