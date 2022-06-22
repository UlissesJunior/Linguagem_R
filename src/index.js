import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import Linguagem from "./Docs.jsx"
import Curso from "./Curso.jsx"
import About from "./About.jsx"

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />}></Route>
        <Route path="/docs" element={<Linguagem />}></Route>
        <Route path="/course" element={<Curso/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);