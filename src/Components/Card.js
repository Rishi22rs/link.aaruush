import React, { useEffect, useState } from "react";
import Back1 from "../Graphics/back.jpg";
import "../Card.css";
import aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Card = ({
  title = "Title Missing",
  description = "Consequat dolore minim sint ipsum veniam cupidatat labore anim irure.Adipisicing pariatur voluptate.",
}) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const toggleHeight = () => {
    height == 0 ? setHeight(100) : setHeight(0);
  };

  return (
    <div
      data-aos="fade-up"
      className="shadow bg-white col-xl-2 col-md-3 col-sm-12 myRow"
    >
      <img
        className="card-img"
        src={Back1}
        alt="domain"
        height={150}
        width={300}
      />
      <div className="inner-contain">
        <h4 className="tit">{title}</h4>
        <p className="description" style={{ maxHeight: `${height}px` }}>
          {description}
        </p>
        <div className="container">
          <div className="row justify-content-around">
            <button
              type="button"
              class="btn btn-light col-12"
              onClick={() => toggleHeight()}
            >
              {height == 0 ? "Expand" : "Collapse"}
            </button>
            <Link to="/Details">
              <button type="button" class="btn btni col-12">
                Mageffiece (Explore)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
