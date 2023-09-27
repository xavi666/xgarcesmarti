import React from "react";

// Carousel
import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";

import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="bg-dark">
      <Container>
        <Col>
          <Row>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Skills;
