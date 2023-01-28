import React from "react";

import "./Home.scss";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import date from "../../utils/actualYear";

function Home() {
  function BasicExample() {
    return (
      <Container fluid className="transparent">
        <Row className="justify-content-center mb-3">
          <Card
            className="mt-5 mb-5 p-0"
            bg="Light"
            border="secondary"
            style={{
              width: "auto",
            }}
          >
            <Card.Img variant="top" src="logo.svg" />
            <Card.Body>
              <Card.Title>HRnet</Card.Title>
              <Card.Text>for Human Resources</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                &copy; OPENCLASSROOMS {date.ACTUAL_FRENCH_DATE}
              </small>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    );
  }

  return <BasicExample />;
}

export default Home;
