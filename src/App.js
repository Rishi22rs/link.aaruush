import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Front from "./Components/Front";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Front />
      <div>
        <div className="row justify-content-around">
          <Card
            title="Not Missing"
            description="Risdhi dolore minim sint ipsum veniam cupidatat labore anim irure.
          Adipisicing pariatur voluptate. "
          />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row justify-content-around">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
