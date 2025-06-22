import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './CarouselComponent.css';

function CarouselComponent() {
  const images = [
    {
      src: "https://blog.creationcrate.com/wp-content/uploads/2018/06/243274_The-Ultimate-List-Of-Engineering-Projects-opt-2_061418.png",
      alt: "Engineering Projects",
      caption: "Innovative Engineering Solutions"
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C511BAQHu2Pn4c6EQxg/company-background_10000/company-background_10000/0/1584116494390/vidyalankar_institute_of_technology_mumbai_cover?e=2147483647&v=beta&t=YZNQly74XO_DJ9Tj_KVPt47otmlN99iknqP3xByU39Q",
      alt: "VIT Campus",
      caption: "Vidyalankar Institute of Technology"
    },
    {
      src: "https://vit.edu.in/images/video4.png",
      alt: "Campus Life",
      caption: "Vibrant Campus Environment"
    },
    {
      src: "https://images.shiksha.com/mediadata/images/1516603437phpizDxh9.jpeg",
      alt: "Academic Excellence",
      caption: "Excellence in Education"
    },
    {
      src: "https://www.vidyavision.com/CollegeUploads/Photos/2017-20-11-15-04-37_vit3.png",
      alt: "Modern Facilities",
      caption: "State-of-the-Art Facilities"
    },
    {
      src: "https://www.vit.edu.in/images/life1.jpg",
      alt: "Student Life",
      caption: "Dynamic Student Community"
    }
  ];

  return (
    <motion.div 
      className="carousel-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Carousel 
        className="custom-carousel" 
        interval={4000} 
        controls={true} 
        indicators={true}
        fade
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <motion.img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <Carousel.Caption>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {image.caption}
              </motion.h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
}

export default CarouselComponent;