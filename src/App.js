import React from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";

import Contact from "./Pages/Contact";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routers>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </Routers>
    <Footer/>
    </>
  );
}

export default App;
