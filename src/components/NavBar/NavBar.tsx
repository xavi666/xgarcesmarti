import React from "react";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={classNames({ scrolled })}>
      <Container>
        <Navbar.Brand href="#home">XG</Navbar.Brand>
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
            <Nav.Link
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={classNames("navbar-link", {
                active: activeLink === "projects",
              })}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} inverse />{" "}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} inverse />{" "}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} inverse />{" "}
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
