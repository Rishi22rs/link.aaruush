import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import background from "../Graphics/background.jpeg";
import back1 from "../Graphics/background1.jpg";
import back2 from "../Graphics/background2.jpg";
import { Carousel } from "react-bootstrap";
const Front = ({ title = "", show = false, image = background }) => {
  return (
    <>
      <div className="div" style={{ backgroundImage: "url(" + image + ")" }}>
        <h1 className="text-center my_title" style={{ fontSize: "70px" }}>
          {title}
        </h1>
        {show && window.innerWidth < 600 ? (
          <a
            href="#cards"
            className="btni"
            style={{
              backgroundColor: "#D3F0EB",
              border: "2px solid #fec6c5",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "20px",
              color: "white",
              outline: "none",
              webkitTextStroke: "1px #fec6c5",
              textDecoration: "none",
            }}
          >
            Explore More
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Front;
