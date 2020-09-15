import React, { useEffect } from "react";
import Back1 from "../Graphics/back.jpg";
import "../Card.css";
import aos from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
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
        <h4 className="tit">Case-cade</h4>
        <p className="description">
          Consequat dolore minim sint ipsum veniam cupidatat labore anim irure.
          Adipisicing pariatur voluptate.
        </p>
        <div className="container">
          <div className="row justify-content-around">
            <button type="button" class="btn btn-light btni col-4">
              Explore
            </button>
            <button type="button" class="btn btn-light btni col-4">
              Mageffiece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
