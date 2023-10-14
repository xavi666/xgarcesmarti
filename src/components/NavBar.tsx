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
          <Navbar.Brand
            className="bg-info text-light  bg-warning fw-bold ps-2 pe-2 rounded fs-5"
            href="#home"
          >
            <span className="fs-5">XG</span>
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
                href="#skills"
                onClick={() => setActiveLink("skills")}
                className={classNames("navbar-link", {
                  active: activeLink === "skills",
                })}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#experience"
                onClick={() => setActiveLink("experience")}
                className={classNames("navbar-link", {
                  active: activeLink === "experience",
                })}
              >
                Experience
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
