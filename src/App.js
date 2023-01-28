import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";

// components
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/currentemployees" element={<CurrentEmployees />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
