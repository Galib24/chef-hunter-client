import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer mt-5">
        <Container fluid className="text-center">
          <Row>
            <Col md={6} className="text-md-left">
              <p>Contact Us: chef@gmail.com </p>
              <p>Phone: +001337540530</p>
            </Col>
            <Col md={6} className="text-md-right">
              <p>Location: NewYork,manhaten city,USA</p>
            </Col>
          </Row>
          <p className="mt-3 mb-0 p-5"> 2023 Brooklyn Diner. All Rights Reserved.</p>
        </Container>
      </div>
    );
};

export default Footer;