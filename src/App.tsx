import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Festes from "./components/pages/Festes";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
