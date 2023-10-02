import React from "react";

// Bootstrap elements
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <section className="bg-light pt-3 pb-3">
      <Container>
        <Row>
          <Col>
            <h1 className="text-light">Skills</h1>
            <div className="container my-5">
              <h2>Experience</h2>
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <ul className="timeline-3">
                    <li>
                      <a href="#!">New Web Design</a>
                      <a href="#!" className="float-end">
                        21 March, 2014
                      </a>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque scelerisque diam non nisi semper, et elementum
                        lorem ornare. Maecenas placerat facilisis mollis. Duis
                        sagittis ligula in sodales vehicula....
                      </p>
                    </li>
                    <li>
                      <a href="#!">21 000 Job Seekers</a>
                      <a href="#!" className="float-end">
                        4 March, 2014
                      </a>
                      <p className="mt-2">
                        Curabitur purus sem, malesuada eu luctus eget, suscipit
                        sed turpis. Nam pellentesque felis vitae justo accumsan,
                        sed semper nisi sollicitudin...
                      </p>
                    </li>
                    <li>
                      <a href="#!">Awesome Employers</a>
                      <a href="#!" className="float-end">
                        1 April, 2014
                      </a>
                      <p className="mt-2">
                        Fusce ullamcorper ligula sit amet quam accumsan aliquet.
                        Sed nulla odio, tincidunt vitae nunc vitae, mollis
                        pharetra velit. Sed nec tempor nibh...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
