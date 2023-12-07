import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

const NavigationBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">hannah</NavLink>
        </div>
        <div className="navbar-links">
          <Link to="/section1">section1</Link>
          <Link to="/section2">Section 2</Link>
          <a href="#section3">Section 3</a>
        </div>
      </nav>
    );
  };

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </div>
      </footer>
    );
  };

  function section2() {
    return (
      <Router>
        <div className="section2">
          <NavigationBar />
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section1" element={<section2 />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    );
  }

  const section2 = () => {
    const backgroundImageUrl = 'images/spaintwo - 520.jpeg';
    const photoElement = document.getElementById('content');
    photoElement.classList.add('background-image');
    element.style.backgroundImage = `url("${backgroundImageUrl}")`;
  return (
    <div className="section12">
      <div className="content">
        <h1 className="subtitle">section2</h1>
      </div>
    </div>
  );
  };

export default section2;