import React from "react";

// Bootstrap elements
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="bg-dark pt-3 pb-3">
      <Container>
        <Row>
          <Col>
            <h1 className="text-light">Skills</h1>
            <div className="mt-4">
              <Row>
                <Col md={3} className="mb-2">
                  <Card className="mb-4 h-100">
                    <Card.Body>
                      <Card.Title>Product Owner</Card.Title>
                      <Card.Text>
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
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-2">
                  <Card className="mb-4 h-100">
                    <Card.Body>
                      <Card.Title>Web Developer</Card.Title>
                      <Card.Text>
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
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-2">
                  <Card className="mb-4 h-100">
                    <Card.Body>
                      <Card.Title>Scrum</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>🔄 Refinement</li>
                          <li>📊 Sprint Reviews/Planning</li>
                          <li>📖 User Stories</li>
                          <li>💥 Increment</li>
                          <li>📂 Product/Sprint Backlog</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-2">
                  <Card className="mb-4 h-100">
                    <Card.Body>
                      <Card.Title>Tools</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>🔧 Jira / Confluence / Discovery</li>
                          <li>📊 Google Analytics / Plausible</li>
                          <li>🔍 Google Search Console</li>
                          <li>📊 Looker Studio</li>
                          <li>💻 Github</li>
                          <li>🔥 Hotjar</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
