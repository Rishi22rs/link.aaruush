import React from "react";
import Carouselling from "./Components/Carousel";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Carouselling />
      <div style={{ margin: "auto" }} className="row">
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
        <div className="col-md-">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
