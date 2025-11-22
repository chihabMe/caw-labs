import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercise1Page from "./pages/Exercise1Page";
import Exercise2Page from "./pages/Exercise2Page";
import Exercise3Page from "./pages/Exercise3Page";
import Exercise4Page from "./pages/Exercise4Page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise1" element={<Exercise1Page />} />
        <Route path="/exercise2" element={<Exercise2Page />} />
        <Route path="/exercise3" element={<Exercise3Page />} />
        <Route path="/exercise4" element={<Exercise4Page />} />
      </Routes>
    </Router>
  );
}
