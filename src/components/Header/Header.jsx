import React from "react";

import "./Header.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.svg"
              width="60"
              height="60"
              className="mx-1 d-inline-block align-center "
            />
            {"  "}
            <span className="fs-6">WEALTH HEALTH</span>
            <span className="HR">- HRnet</span>
          </Navbar.Brand>
        </LinkContainer>

        
        
          <Nav
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav>
              <LinkContainer to="/createemployee">
                <Nav.Link>Create Employee</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/currentemployees">
                <Nav.Link>Current Employee</Nav.Link>
              </LinkContainer>
            </Nav>
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default Header;
