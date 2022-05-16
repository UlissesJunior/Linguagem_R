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
          <ul>Curso</ul>
          <ul>Artigos</ul>
          <ul>Sobre</ul>
        </div>
        {/* <div className="nav-right">
          <img src={Mode} alt="Language" />
        </div> */}
      </div>
    </>
  );
}

export default Nav;
