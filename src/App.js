import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cphome from "./CreativePorto1/Cphome";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cphome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
