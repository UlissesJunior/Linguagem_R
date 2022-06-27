import React from "react";
import Anime404 from "./img/404.png";

function NotFound() {
  return (
    <div className="box">
      <div className="container" style={{ height: "100vh" }}>
        <div className="container-box" style={{ padding: "0px" }}>
          <h1>Page not found</h1>
          <div className="right animate">
            <img src={Anime404} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
