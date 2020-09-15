import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "../Graphics/logo.png";

const Navbaring = () => {
  return (
    <nav className="shadow bg-white navbar navbar-light sticky-top bg-light">
      <a
        className="navbar-brand"
        style={{ color: "#203a43", fontSize: 30 }}
        href="https://www.aaruush.org/"
      >
        <img src={logo} alt="logo" height="40" width="80" />
        AARUUSH 2020
      </a>
    </nav>
  );
};

export default Navbaring;
