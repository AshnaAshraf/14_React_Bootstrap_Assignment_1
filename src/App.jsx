import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import CarouselSection from "./components/CarouselSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CourseModals from "./components/CourseModals";

const courses = [
  { title: "HTML Basics", description: "Learn the building blocks of the web with HTML.", details: "HTML is the foundation of web development. In this course, you'll learn how to create structured web pages using HTML elements like headings, paragraphs, links, and more.", image: "/images/html.jpg" },
  { title: "CSS Design", description: "Style websites with modern CSS techniques.", details: "CSS3 is the latest version of Cascading Style Sheets, offering advanced styling features like animations, transitions, and responsive design to create modern, visually appealing web pages.", image: "/images/css3.jpg" },
  { title: "JavaScript Programming", description: "Make your websites interactive with JavaScript.", details: "JavaScript is a versatile programming language used to create interactive and dynamic content on websites, enabling features like form validation, animations, and real-time updates.", image: "/images/javascript.jpg" },
  { title: "React Basics", description: "Learn how to build dynamic user interfaces with React.", details: "React is a JavaScript library for building interactive and dynamic user interfaces, allowing developers to create fast, reusable components for web and mobile applications.", image: "/images/react.jpg" },
  { title: "Python for Beginners", description: "A beginner-friendly guide to Python programming.", details: "Python is a high-level, versatile programming language known for its readability and simplicity, widely used in web development, data analysis, automation, and artificial intelligence.", image: "/images/python.jpg" },
  { title: "Bootstrap Framework", description: "Quickly design responsive websites with Bootstrap.", details: "Bootstrap is a popular, open-source front-end framework for building responsive, mobile-first websites and web applications. It provides pre-designed HTML, CSS, and JavaScript components, including grids, buttons, forms, and navigation elements, enabling developers to create professional and consistent designs quickly.", image: "/images/bootstrap.jpg" },
  { title: "Flutter", description: "Build beautiful mobile applications using Flutter.", details: "Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Learn how to create beautiful apps with it.", image: "/images/flutter.jpg" },
  { title: "NodeJS", description: "Get started with backend development using Node.js", details: "Node.js is a JavaScript runtime built on Chrome's V8 engine. In this course, you'll learn how to create server-side applications using Node.js and Express.", image: "/images/node.jpg" },
  { title: "Angular", description: "Build dynamic, modern web apps with Angular framework.", details: "Angular is a platform for building mobile and desktop web applications. This course will guide you through developing powerful web apps using Angular.", image: "/images/angular.jpg" },
  { title: "Git", description: "Understand version control with Git and GitHub.", details: "Git is a version control system that tracks changes in files and allows collaboration. In this course, you'll learn how to use Git for version control and work with GitHub for code collaboration.", image: "/images/git.jpg" },
  { title: "Docker", description: "A hands-on guide to containerization with Docker.", details: "Docker is a platform for developing, shipping, and running applications in containers. Learn how to build and manage Docker containers in this practical course.", image: "/images/docker.jpg" },
  { title: "SQL", description: "Learn database management with SQL queries and commands.", details: "SQL (Structured Query Language) is used to communicate with databases. In this course, you'll learn how to write SQL queries to manage and retrieve data from databases.", image: "/images/sql.jpg" },
];

export default function CodeLearningPlatform() {
  return (
    <div className="min-vh-100 bg-light text-dark">
      <Navbar />
      <CarouselSection />
      <AboutSection />
      <CoursesSection courses={courses} />
      <ContactSection />
      <Footer />
    </div>
  );
}
