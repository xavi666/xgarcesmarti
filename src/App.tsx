import React from "react";
import "./App.css";

import { createContext } from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

const App = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
