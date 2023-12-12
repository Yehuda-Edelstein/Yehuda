import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dumbnail from "./components/dumbnail/Dumbnail";
import Header from "./components/header/Header";
import ErrorPage from "./components/404/404";
import ScreenplayRules from "./components/screenplayrules/ScreenplayRules";
import "./App.scss";
import Flrp from "./pages/Flrp";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flrp" element={<Flrp />} />
          <Route path="/dumbnail" element={<Dumbnail />} />
          <Route path="/screenplayrules" element={<ScreenplayRules />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
