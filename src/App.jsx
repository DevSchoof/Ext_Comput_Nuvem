import React from "react";
import { Routes, Route } from "react-router-dom";
import Land from "./pages/Land";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
