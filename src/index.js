import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import Linguagem from "./Linguagem.jsx"
import Curso from "./Curso.jsx"
import About from "./About.jsx"

render(
  <BrowserRouter>
    <Routes>
        <Route path="/Linguagem_R/" exact={true} element={<App />}></Route>
        <Route path="/Linguagem_R/docs" element={<Linguagem />}></Route>
        <Route path="/Linguagem_R/course" element={<Curso/>}></Route>
        <Route path="/Linguagem_R/about" element={<About/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);