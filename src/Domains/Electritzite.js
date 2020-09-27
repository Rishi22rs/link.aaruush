import React, { useEffect } from "react";
import "../Detail.css";
import aos from "aos";
import "aos/dist/aos.css";
import Front from "./Front";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <Front title="Name of event" />
      <div className="container my-container" data-aos="fade-up">
        <p>
          Will send you by todayyy
          <br />
          <br />
          <b>1.</b> Each slot is for 10 minutes.
          <br />
          <b>2.</b> Google Meet link will be mailed to the participants a day
          prior.
          <br />
          <b>3.</b> Upon entering the Google meet link, the link for the game
          “Just Guess It!” will be provided.
          <br />
          <b>4.</b> The participant has to guess as many gibberish words and
          answer as many questions as possible within 2 minutes.
          <br />
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
            href="https://meet.google.com/"
          >
            <b>Join Now</b>
          </a>
        </div>
        <h3>Have any doubt?</h3>
        <a className="btni" href="https://meet.google.com/">
          Contact here
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Details;
