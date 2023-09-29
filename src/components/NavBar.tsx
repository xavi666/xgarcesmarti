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
                <a
                  href="https://www.linkedin.com/in/xavier-garc%C3%A9s-mart%C3%AD-8aa3704"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={"2x"}
                    className={"me-1"}
                  />
                </a>
                <a
                  href="https://github.com/xavi666"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size={"2x"}
                    className={"me-1"}
                  />
                </a>
                <a
                  href="https://www.instagram.com/xevi_6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size={"2x"} />
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
