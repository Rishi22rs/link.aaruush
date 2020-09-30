import React, { useEffect, useState } from "react";
import Back1 from "../Graphics/back.jpg";
import "../Card.css";
import aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Card = ({
  uid = 1,
  title = "Title Missing",
  description = "Consequat dolore minim sint ipsum veniam cupidatat labore anim irure.Adipisicing pariatur voluptate.",
  image = Back1,
  domain = "Not available",
}) => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="shadow bg-white col-xl-4 col-md-4 col-sm-12 myRow card"
    >
      <img
        className="card-img"
        src={image}
        alt="domain"
        // height={150}
        // width={300}
      />
      <div className="inner-contain">
        <h4 className="tit">{title}</h4>
        <p className="description">{description}</p>
        <div className="container">
          <div className="row justify-content-around">
            <Link to={`/Details/${uid}`} className="btn btn-light col-6">
              Explore
            </Link>
            <div className="btni col-6">{domain}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
