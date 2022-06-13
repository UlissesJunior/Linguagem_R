import React from "react";
import Logo from "../img/logo_s.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/course">
            <ul>Curso</ul>
          </Link>
          <Link to="/docs">
            <ul>Docs</ul>
          </Link>
          <Link to="/about">
            <ul>Sobre</ul>
          </Link>
        </div>
        {/* <div className="nav-right">
          <img src={Mode} alt="Language" />
        </div> */}
      </div>
    </>
  );
}

export default Nav;
