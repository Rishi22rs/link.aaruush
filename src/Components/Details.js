import React, { useEffect, useState } from "react";
import "../Detail.css";
import aos from "aos";
import "aos/dist/aos.css";
import Front from "./Front";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Aeravision from "../Graphics/Posters/Aeravision.jpeg";
import Dr from "../Graphics/Posters/Dr.jpeg";
import Grand from "../Graphics/Posters/Grand.jpeg";
import mag from "../Graphics/Posters/Mag.jpeg";
import master from "../Graphics/Posters/master.jpeg";
import Reinvent from "../Graphics/Posters/Reinvent.jpeg";
import Sketchy from "../Graphics/Posters/Sketchy.jpeg";
import Survival from "../Graphics/Posters/Survival.jpeg";
import yuddhame from "../Graphics/Posters/yuddhame.jpg";
import West from "../Graphics/Posters/West.jpeg";
import Fandom from "../Graphics/Posters/Fandom.jpeg";
import Online from "../Graphics/Posters/Online.png";
import digital from "../Graphics/Posters/digital.png";
import x from "../Graphics/Posters/x.png";

import content from "../content.json";

const Details = ({ match }) => {
  const [isShowing, setIsShowing] = useState(false);
  const imgs = [
    [mag, "#C1C3C5"],
    [Aeravision, "#FFB207"],
    [Sketchy, "#EFDEB3"],
    [West, "#4EC3CD"],
    [Grand, "#039AAE"],
    [Dr, "#F0ADAA"],
    [digital, "#FEB339"],
    [Survival, "#FEB339"],
    [x, "#03989E"],
    [Fandom, "#999275"],
    [yuddhame, "#C7CBF0"],
    [Reinvent, "#CFDCED"],
    [Online, "#44D7DE"],
    [master, "#D9D8DD"],
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar title={content[match.params.uid].domain} />
      <Front title="" image={imgs[match.params.uid][0]} />
      <div
        className="container my-container"
        style={{ backgroundColor: `${imgs[match.params.uid][1]}` }}
        data-aos="fade-up"
      >
        <h3>{content[match.params.uid].event}</h3>
        <p>
          {content[match.params.uid].description}
          <h4>Rules</h4>
          {match.params.uid == 9 ? (
            <>
              <h6>Participants will be playing two games</h6>
              <b>Game 1: Scribble.io:</b>
            </>
          ) : (
            <></>
          )}
          <ul>
            {content[match.params.uid].rules.map((x, key) => (
              <li key={key}>{x}</li>
            ))}
          </ul>
          {match.params.uid == 9 ? (
            <>
              <b>Game 2: Taboo:</b>
              <ul>
                {content[match.params.uid].rules1.map((x, key) => (
                  <li key={key}>{x}</li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </p>
        {/* <div class="embed-container">
          <iframe
            src="https://www.youtube.com/embed/l4CfJyALNLE"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div> */}
        <div className="row">
          <h3 className="col-6">Join contest here...</h3>
          <a
            className="btni col-3"
            style={{ textAlign: "center" }}
            href={content[match.params.uid].link}
          >
            <b>Join Now</b>
          </a>
        </div>
        <h3>Have any doubt?</h3>
        <a
          className="btni"
          onClick={() => setIsShowing(!isShowing)}
          href={`tel:${content[match.params.uid].phone}`}
        >
          Contact here
        </a>
        {isShowing ? (
          <div class="alert alert-dark" role="alert">
            Contact this number: {content[match.params.uid].phone}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Details;
