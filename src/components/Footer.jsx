import React from "react";

export default function Footer() {
  return (
    <footer className="text-center bg-dark text-light py-3 mt-5">
      <p className="mb-0">&copy; {new Date().getFullYear()} Elevate Academy. All rights reserved.</p>
    </footer>
  );
}
