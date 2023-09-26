import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Banner />
      </header>
    </div>
  );
}

export default App;
