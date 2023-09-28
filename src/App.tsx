import React, { useState } from "react";
import "./App.css";

import { createContext } from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

export const ThemeContext = createContext(null);

const App = () => {
  return (
    <div className="bg-dark">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
};

export default App;
