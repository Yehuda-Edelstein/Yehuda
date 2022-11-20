import React from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
