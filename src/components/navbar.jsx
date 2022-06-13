import React from "react";
import Logo from "../img/logo_s.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/Linguagem_R/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/Linguagem_R/course">
            <ul>Curso</ul>
          </Link>
          <Link to="/Linguagem_R/docs">
            <ul>Docs</ul>
          </Link>
          <Link to="/Linguagem_R/about">
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
