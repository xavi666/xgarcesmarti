import React from "react";

// Bootstrap elements
import { Container, Row } from "react-bootstrap";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section className="pt-3 pb-3 bg-light">
      <Container>
        <h1 className="text-dark">Skills</h1>
        <div className="mt-4">
          <Row>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="skill-box">
                <h3>Product Owner</h3>
                <p>
                  <ul>
                    <li>✨ Agile (Scrum)</li>
                    <li>❤️ Empathy</li>
                    <li>📢 Communication</li>
                    <li>👥 Collaboration</li>
                    <li>📋 Requirements Definition</li>
                    <li>🤔 Critical Thinking</li>
                    <li>📊 Data-Driven (KPIs)</li>
                    <li>🚀 MVP Definition</li>
                    <li>🗺️ Product RoadMap Definition</li>
                    <li>🎯 Prioritization based on Goals</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="skill-box">
                <h3>Web Developer</h3>
                <ul>
                  <li>⚛️ React</li>
                  <li>🚂 Ruby on Rails</li>
                  <li>🅰️ AngularJS </li>
                  <li>📜 JavaScript </li>
                  <li>🧰 TypeScript </li>
                  <li>🐘 PHP</li>
                  <li>🌐 HTML </li>
                  <li>🎨 CSS</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="skill-box">
                <h3>Scrum</h3>
                <ul>
                  <li>🔄 Refinement</li>
                  <li>📊 Sprint Reviews/Planning</li>
                  <li>📖 User Stories</li>
                  <li>💥 Increment</li>
                  <li>📂 Product/Sprint Backlog</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="skill-box">
                <h3>Tools</h3>
                <ul>
                  <li>🔧 Jira / Confluence / Discovery</li>
                  <li>📊 Google Analytics / Plausible</li>
                  <li>🔍 Google Search Console</li>
                  <li>📊 Looker Studio</li>
                  <li>💻 Github</li>
                  <li>🔥 Hotjar</li>
                </ul>
              </div>
            </div>
          </Row>
        </div>
        <div className="mt-3">
          <a
            className="btn btn-warning fw-bold"
            href="/Xavier Garces CV - September 2023.pdf"
            target="_blank"
            download
          >
            Download CV <FontAwesomeIcon icon={faCircleArrowDown} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
