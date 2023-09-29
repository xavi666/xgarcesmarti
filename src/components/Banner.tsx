import React, { useState, useEffect } from "react";

// Bootstrap elements
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const TO_ROTATE = [
  "Web Developer 🕸",
  "Product Owner 👨‍🔬",
  "Product Person 🌻",
  "Scrum 💘",
];
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
    <section className="banner bg-info text-light pt-3 pb-3">
      <Container>
        <Row>
          <Col>
            <h1>
              {`Hi I'm a `}
              <span className="wrap">{text}</span>{" "}
            </h1>
            <p>Lorem ipsum is simply dummy text of...</p>
            <Button variant="light" onClick={() => console.log("connect")}>
              Let's connect <FontAwesomeIcon icon={faCircleArrowRight} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
