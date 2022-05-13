import React from "react";
import Logo from "../img/logo_s.png";
import Mode from "../img/mode.png";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-center">
          <ul>Vídeos</ul>
          <ul>Artigos</ul>
          <ul>Exercícios</ul>
        </div>
        <div className="nav-right">
          <img src={Mode} alt="Language" />
        </div>
      </div>
    </>
  );
}

export default Nav;
