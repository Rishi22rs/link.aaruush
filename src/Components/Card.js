import React from "react";
import Back2 from "../Graphics/background2.jpg";
import "../Card.css";

const Card = () => {
  return (
    <aside class="profile-card">
      <header>
        <a target="_blank" href="#">
          <img src={Back2} class="hoverZoomLink" />
        </a>

        <h1>John Doe</h1>

        <h2>Better Visuals</h2>
      </header>

      <div class="profile-bio">
        <p>
          It takes monumental improvement for us to change how we live our
          lives. Design is the way we access that improvement.
        </p>
      </div>

      <ul class="profile-social-links">
        <li>
          <a target="_blank" href="https://www.facebook.com/creativedonut">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/dropyourbass">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/vipulsaxena">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.behance.net/vipulsaxena">
            <i class="fa fa-behance"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Card;
