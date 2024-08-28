import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <span>Pavan Arravali</span>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="header-options">
          <label htmlFor="menu-toggle" className="close-icon">&times;</label>
          <div className="header-option">
            <Link smooth to="#home">Home</Link>
            <Link smooth to="#aboutme">About Me</Link>
            <Link smooth to="#resume">Resume</Link>
            <Link smooth to="#contactme">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
