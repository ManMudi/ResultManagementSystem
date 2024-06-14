import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.26064999906!2d39.77305477503017!3d-5.221688894756048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18426d1d55e02815%3A0x9ebd397de234c2c0!2sGombani%20Stadium!5e0!3m2!1sen!2stz!4v1715685081902!5m2!1sen!2stz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              myusuph2@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +255-778-939-544
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Chake-Chake  Pemba
            </li>
          </ul>
        </div>
      </Container>
    </section>

    );
};

export default Contact;