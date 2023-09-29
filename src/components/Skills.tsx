import React from "react";

// Bootstrap elements
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="bg-dark pt-3 pb-3">
      <Container>
        <Col>
          <Row>
            <h1 className="text-light">Skills</h1>
            <Col>
              <Row>
                <Card border="primary">
                  <Card.Header>Product Owner</Card.Header>
                  <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="primary">
                  <Card.Header>Web Developer</Card.Header>
                  <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Skills;
