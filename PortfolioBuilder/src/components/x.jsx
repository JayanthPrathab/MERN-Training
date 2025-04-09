import React from "react";
import { BrowserRouter, Router,Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import sjitlogo from "./sjitlogo.png";  // Ensure the file exists
import entwy from "./entwy.jpeg";  // Ensure the file exists
import zuntra from "./zuntra.jpeg";  // Ensure the file exists
import Contact from "./pages/Contact.jsx";  // Ensure this file exists

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <img src={entwy} alt="Left Image" className="side-image1" />
            <img src={sjitlogo} alt="Logo" className="logo" />
            <img src={zuntra} alt="Right Image" className="side-image2" />
          </div>
          <h1>Campus Energy Management</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main">
          <Routes>
            <Route path="/" element={<p>Energy management as a goal.</p>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="column">
            <h3>About Us</h3>
            <p>Learn more about our mission and values.</p>
          </div>
          <div className="column">
            <h3>Services</h3>
            <p>Discover what we offer to our customers.</p>
          </div>
          <div className="column">
            <h3>Contact</h3>
            <p>Get in touch with us for more details.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;