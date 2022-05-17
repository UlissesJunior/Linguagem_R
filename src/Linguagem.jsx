import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Anime1 from "./img/anime-r.png";
import Anime2 from "./img/anime-2.png";
import Icon1 from "./img/video_icon.png";
import Icon2 from "./img/exercicios_icon.png";
import Icon3 from "./img/artigo_icon.png";
import Icon4 from "./img/r_icon.png";

function Linguagem() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box">
            <div className="left">
              <h1>
                Linguagem R
              </h1>
            </div>
            <div className="right">
              <img src={Anime1} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-box">
          <h2>Curso</h2>
          <h3>
            Nessa plataforma, vai ser oferecido de forma gratuita um curso no
            total de 10 horas contendo videoaulas, artigos e exercícios sobre o
            assunto
          </h3>
          <div className="components">
            <div>
              <div className="component">
                <img src={Icon1} alt="Banner" />
                <p>Videoaulas</p>
              </div>
              <div className="component">
                <img src={Icon3} alt="Banner" />
                <p>Artigos</p>
              </div>
            </div>
            <div>
              <div className="component">
                <img src={Icon2} alt="Banner" />
                <p>Exercícios</p>
              </div>
              <div className="component">
                <img src={Icon4} alt="Banner" />
                <p>Linguagem R</p>
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

export default Linguagem;
