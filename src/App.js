import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  useEffect(() => {
    AOS.init({ once: false }); // or your preferred options
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      {/* Assuming Experience is a component that you have created */}
      <Experience />
      <Contact />
    </>
  )
}

export default App