import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
