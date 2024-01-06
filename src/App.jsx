import { useEffect } from "react";
import "./App.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the viewport
    });
  }, []);
  return (
    <div className="bg-[#eeeeee]">
      <div className="max-w-[1180px] w-full mx-auto">
        <Navbar />
        <Banner />
        <Skills />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
