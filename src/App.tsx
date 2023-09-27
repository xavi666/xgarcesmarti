import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

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
