import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
      <center>
      <Row>
        <p>Feels you in Tech Sea</p>
      </Row>
      <Row>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://mail.google.com/mail/?authuser=0" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </Row>
      </center>
    </Container>
  );
}

export default Footer;
