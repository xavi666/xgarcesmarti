import React from "react";

import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  return (
    <section>
      <Container>
        <Row className="align-items-cneter">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Wellcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded `}
              <span className="">a web developer</span>{" "}
            </h1>
            <p>Lorem ipsum is simply dummy text of...</p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            Image
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
