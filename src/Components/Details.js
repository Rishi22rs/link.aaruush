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
          <hr />
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
        <hr />
        <div className="row">
          <h3 className="col-xl-6 col-sm-12">Register to contest here...</h3>
          <a
            className="btni col-xl-3 col-sm-12"
            style={{ textAlign: "center" }}
            href={content[match.params.uid].link}
            target="_blank"
          >
            <b>Register Now</b>
          </a>
        </div>
        <hr />
        <b>
          If you have already registered you will receive a mail shortly on your
          registered email id.
        </b>
        <hr />
        <div className="row">
          <h3 className="col-12">Timeline:</h3>
          <ul>
            <li>8 Oct: 5pm-10pm</li>
            <li>9 Oct: 1pm-10pm</li>
            <li>10 Oct: 1pm-10pm</li>
            <li>11 Oct: 1pm-10 pm</li>
            <li>
              12 Oct: 5pm-7pm <b>Result Declaration</b>
            </li>
          </ul>
        </div>
        <hr />
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
