import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; // Import custom CSS for styling

function CarouselComponent() {
  return (
    <div className="my-4">
      <h2>Explore ProjectVault</h2>
      <Carousel className="custom-carousel" interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.creationcrate.com/wp-content/uploads/2018/06/243274_The-Ultimate-List-Of-Engineering-Projects-opt-2_061418.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.licdn.com/dms/image/v2/C511BAQHu2Pn4c6EQxg/company-background_10000/company-background_10000/0/1584116494390/vidyalankar_institute_of_technology_mumbai_cover?e=2147483647&v=beta&t=YZNQly74XO_DJ9Tj_KVPt47otmlN99iknqP3xByU39Q"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://vit.edu.in/images/video4.png"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.shiksha.com/mediadata/images/1516603437phpizDxh9.jpeg"
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.vidyavision.com/CollegeUploads/Photos/2017-20-11-15-04-37_vit3.png"
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.vit.edu.in/images/life1.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CarouselComponent;