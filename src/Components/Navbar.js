import React from "react";

import logo from "../Graphics/logo.png";

const Navbaring = ({ title = "" }) => {
  return (
    <nav className="shadow bg-white navbar navbar-light sticky-top bg-light">
      <a
        className="navbar-brand"
        style={{ color: "#203a43", fontSize: 20 }}
        href="https://www.aaruush.org/"
      >
        <img
          src={logo}
          alt="logo"
          height="30"
          width="51.6"
          style={{ marginRight: 10, marginTop: -8 }}
        />
        {title}
      </a>
    </nav>
  );
};

export default Navbaring;
