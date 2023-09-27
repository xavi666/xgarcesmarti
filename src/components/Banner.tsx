import React from "react";

import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const TO_ROTATE = ["Web Developer", "Product Owner"];
const PERIOD = 2000;

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = () => {
    let i = loopNum % TO_ROTATE.length;
    let fullText = TO_ROTATE[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Wellcome to my Portfolio</span>
            <h1>
              {`Hi I'm a `}
              <span className="wrap">{text}</span>{" "}
            </h1>
            <p>Lorem ipsum is simply dummy text of...</p>
            <button onClick={() => console.log("connect")}>
              Let's connect <FontAwesomeIcon icon={faCircleArrowRight} />
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
