import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import Linguagem from "./Linguagem.jsx"

render(
  <BrowserRouter>
    <Routes>
        <Route path="/Linguagem_R/" exact={true} element={<App />}></Route>
        <Route path="/Linguagem_R/sobre" element={<Linguagem />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);