import React, { useEffect, useState } from "react";
import background from "../Graphics/background.jpeg";

const Front = ({ title = "", show = false, image = background }) => {
  const [opa, setOpa] = useState(1);
  window.onscroll = function () {
    setOpa(1 - document.documentElement.scrollTop / 700);
  };
  return (
    <>
      <div
        className="div"
        style={{ backgroundImage: "url(" + image + ")", opacity: opa }}
      >
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
