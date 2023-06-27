//create a hero component with an image and a title and a little description
import React from 'react';
import './Hero.css';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero">
      <Container className="hero-container">
        <Row>
          <Col>
            <h1 className="hero-title"></h1>
            <p className="hero-description">
              Where Urls go to lose weight and gain Speed
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
