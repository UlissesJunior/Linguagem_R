import React, { useState, useEffect } from "react";
import Logo from "../img/logo_s.png";
import star from "../img/star.png";
import { Link } from "react-router-dom";

function WindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function Menu() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

//  if (active==true){
//     const html = document.getElementsByClassName("body")
//     html.style.cssText = 
//     'overflow: hidden;'
//  }

  const [height, width] = WindowSize();
  if (width > 1000) {
    return (
      <>
        <div className="nav-center">
          <Link to="/course">
            <ul>Curso </ul>
          </Link>
          <Link to="/docs">
            <ul>Docs</ul>
          </Link>
          <Link to="/about">
            <ul>Sobre</ul>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="nav-right">
        <div className="icon" onClick={ToggleMode}>
          <div className={active ? "hamburguer active" : "hamburguer"}></div>
        </div>
      </div>
      <div className={active ? "menuOpen Open" : "menuClosed"}>
      <Link to="/">
          {/* <ul><img src={star} alt="" />Home</ul> */}
          <ul>Home</ul>
        </Link>
        <Link to="/course">
          {/* <ul><img src={star} alt="" />Curso </ul> */}
          <ul>Curso</ul>
        </Link>
        <Link to="/docs">
          {/* <ul><img src={star} alt="" />Docs</ul> */}
          <ul>Docs</ul>
        </Link>
        <Link to="/about">
          {/* <ul><img src={star} alt="" />Sobre</ul> */}
          <ul>Sobre</ul>
        </Link>
      </div>
    </>
  );
}

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default Nav;
