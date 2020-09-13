import React from "react";
import Back2 from "../Graphics/background2.jpg";
import "../Card.css";

const Card = () => {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded card">
      <img
        className="card-img"
        src={Back2}
        alt="domain"
        height={150}
        width={300}
      />
      <div className="inner-container">
        <h4 className="title">Mageffiece</h4>
        <p className="description">
          Consequat dolore minim sint ipsum veniam cupidatat labore anim irure.
          Adipisicing pariatur voluptate.
        </p>
        <button type="button" class="btn btn-light btni">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Card;
