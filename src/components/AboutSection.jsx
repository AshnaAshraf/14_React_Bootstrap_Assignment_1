import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AboutSection() {
  return (
    <section id="about" className="py-5 mt-5" style={{ backgroundColor: "#f0f7f8", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="mb-4" style={{ fontSize: "2.5rem", color: "#2c3e50" }}>
              About Us
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#34495e", lineHeight: "1.8" }}>
            At Elevate Academy, our mission is to make coding accessible, engaging, and effective for everyone. Whether you're a beginner or looking to enhance your skills, we provide comprehensive resources and expert guidance to help you achieve your goals.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
