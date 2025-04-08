import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-info">
          Elevate Academy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#carousel">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
