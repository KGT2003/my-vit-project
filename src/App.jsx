import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

 