import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import './AboutUsFooter.css'; // Optional: Import CSS for styling

const AboutUsFooter = ({ isDarkMode }) => {
  return (
    <footer id='about' className={`footer mt-5 text-center ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className={isDarkMode ? 'text-light' : 'text-dark'}>About Us</h2>
      <p className={isDarkMode ? 'text-light' : 'text-dark'}>
        Vidyalankar College is dedicated to fostering innovation and excellence in education. Our mission is to empower students through knowledge and skills, preparing them for successful careers in a rapidly changing world.
      </p>
      <p className={isDarkMode ? 'text-light' : 'text-dark'}>
        We provide a platform for students to showcase their projects, research, and creativity, connecting them with industry professionals and fellow enthusiasts.
      </p>
      <div className="social-media">
        <h4 className={isDarkMode ? 'text-light' : 'text-dark'}>Connect with us:</h4>
        <a href="https://www.facebook.com/Vidyalankar.VIT/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ margin: '0 10px', color: isDarkMode ? 'white' : '#3b5998' }} />
        </a>
        <a href="https://x.com/vit_vidyalankar" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ margin: '0 10px', color: isDarkMode ? 'white' : '#1da1f2' }} />
        </a>
        <a href="https://www.instagram.com/vit_vidyalankar/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ margin: '0 10px', color: isDarkMode ? 'white' : '#c32aa3' }} />
        </a>
        <a href="https://www.linkedin.com/school/vidyalankar-institute-of-technology/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ margin: '0 10px', color: isDarkMode ? 'white' : '#0077b5' }} />
        </a>
      </div>
      <p className={isDarkMode ? 'text-light' : 'text-dark'}>&copy; {new Date().getFullYear()} ProjectVault. All rights reserved.</p>
    </footer>
  );
};

export default AboutUsFooter;
