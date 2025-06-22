import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import './AboutUsFooter.css';

const AboutUsFooter = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/Vidyalankar.VIT/",
      color: "#1877f2"
    },
    {
      icon: FaTwitter,
      url: "https://x.com/vit_vidyalankar",
      color: "#1da1f2"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/vit_vidyalankar/?hl=en",
      color: "#e4405f"
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/school/vidyalankar-institute-of-technology/",
      color: "#0077b5"
    }
  ];

  return (
    <footer id="about" className={`modern-footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <Container>
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="footer-title">About ProjectVault</h2>
              <p className="footer-description">
                ProjectVault is an innovative platform designed to showcase the incredible academic projects 
                from Vidyalankar Institute of Technology. We believe in the power of student innovation and 
                strive to create a space where creativity meets technology.
              </p>
              <p className="footer-description">
                Our mission is to inspire the next generation of engineers, developers, and innovators by 
                providing easy access to groundbreaking student projects and research.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="footer-right"
            >
              <h3 className="footer-subtitle">Connect With VIT</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
              
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} ProjectVault. Made with <FaHeart className="heart-icon" /> by VIT Students
            </p>
            <p className="footer-tagline">
              Empowering Innovation • Inspiring Excellence • Building Tomorrow
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default AboutUsFooter;