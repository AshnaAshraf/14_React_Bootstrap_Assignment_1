// CourseModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CourseModals({ show, onHide, course }) {
  console.log(course);
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{course.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Start Learning</Button>
      </Modal.Footer>
    </Modal>
  );
}
