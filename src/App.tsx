import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Festes from "./components/pages/Festes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festes" element={<Festes />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
