import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CourseModals from "./CourseModals";

export default function CoursesSection({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Container className="my-5" id="courses">
      <h2 className="text-center mb-4">Our Courses</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {courses.map((course) => (
          <Col key={course.title}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={`images/${course.image}`}
                alt={course.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary" onClick={() => setSelectedCourse(course)}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCourse && (
        <CourseModals
          show={!!selectedCourse}
          onHide={() => setSelectedCourse(null)}
          course={selectedCourse}
        />
      )}
    </Container>
  );
}
