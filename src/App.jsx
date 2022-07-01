import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { Link } from "react-router-dom";

import Star from "./img/star.png";
import Anime1 from "./img/anime-1.png";
import Anime2 from "./img/anime-2.png";
import Icon1 from "./img/video_icon.png";
import Icon2 from "./img/exercicios_icon.png";
import Icon3 from "./img/artigo_icon.png";
import Icon4 from "./img/r_icon.png";

function App() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box" style={{ padding: "0px" }}>
            <div className="left">
              <h1 style={{ maxWidth: "580px" }}>
                Olá, essa é uma plataforma desenvolvida para um trabalho escolar
                no CTIG - Unesp.
              </h1>
              <div
                className="inline-box"
                style={{ maxWidth: "580px", marginTop: "27px" }}
              >
                <div className="inline">
                  <img src={Star} alt="Logo" />
                  <p style={{ margin: "0px" }}>
                    Aqui, você pode aprender mais sobre a Linguagem R, que é uma
                    linguagem de programação multi-paradigma orientada a
                    objetos, voltada à manipulação, análise e visualização de
                    dados.
                  </p>
                </div>
                <div className="inline">
                  <img src={Star} alt="Star" />
                  <p style={{ margin: "0px" }}>
                    <b>Alunos no projeto:</b> <br />
                    Cauã Gabriel Pereira da Silva <br />
                    Kamily Maria Barboza Leduino <br />
                    Luiz Felipe Silvestre de Castro <br />
                    Ulisses Douglas de Paula Assis Junior
                  </p>
                </div>
              </div>
              <div>
                <Link to="/docs">
                  <div className="button-center">
                    <button style={{ marginTop: "40px" }}>Saiba Mais</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="right">
              <img src={Anime1} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-box" style={{ padding: "0px" }}>
          <div className="left">
            <h2>Curso</h2>
            <h3 style={{ maxWidth: "580px" }}>
              Nessa plataforma, vai ser oferecido de forma gratuita um curso no
              total de 10 horas contendo videoaulas, artigos e exercícios sobre
              o assunto.
            </h3>
            <div className="components" style={{ maxWidth: "580px" }}>
              <div>
                <div className="component">
                  <Link to="/course">
                    <img src={Icon1} alt="Banner" />
                  </Link>
                  <p>Videoaulas</p>
                </div>
                <div className="component">
                  <Link to="/course">
                    <img src={Icon3} alt="Banner" />
                  </Link>
                  <p>Artigos</p>
                </div>
              </div>
              <div>
                <div className="component">
                  <Link to="/course">
                    <img src={Icon2} alt="Banner" />
                  </Link>
                  <p>Exercícios</p>
                </div>
                <div className="component">
                  <Link to="/docs">
                    <img src={Icon4} alt="Banner" />
                  </Link>
                  <p>Linguagem R</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={Anime2} alt="Banner" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
