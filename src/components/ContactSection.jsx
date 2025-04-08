import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactSection() {
  return (
    <Container id="contact" className="my-5 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                minLength="3"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
