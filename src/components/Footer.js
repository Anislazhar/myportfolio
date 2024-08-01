import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Anis Lazhar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} ALazhar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Anislazhar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anislazhar/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="mailto:anis.lazhar@web.de"
                rel="noreferrer"
              >
                <RiMailSendFill />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                href="tel:+4917621826014"
                rel="noreferrer"
              >
                <FaPhoneAlt />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
