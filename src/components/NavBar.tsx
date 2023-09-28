import React, { useState } from "react";

import classNames from "classnames";

// Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header>
      <Navbar bg="white" fixed="top">
        <Container>
          <Navbar.Brand className="text-dark fs-1" href="#home">
            XG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                onClick={() => setActiveLink("home")}
                className={classNames("navbar-link", {
                  active: activeLink === "home",
                })}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about-me"
                onClick={() => setActiveLink("about-me")}
                className={classNames("navbar-link", {
                  active: activeLink === "about-me",
                })}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#cv"
                onClick={() => setActiveLink("cv")}
                className={classNames("navbar-link", {
                  active: activeLink === "cv",
                })}
              >
                CV
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
