import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Kamily from "./img/about/Kamily.jpg";
import Caua from "./img/about/Caua.jpg";
import Ulisses from "./img/about/Ulisses.jpg";
import Luiz from "./img/about/Luiz.jpg";
import sobre from "./img/about-1.png"

function About() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box .center-row" style={{ padding: "0px" }}>
            <div className="left">
              <h1>Sobre</h1>
            </div>
            <div className="right">
              <img src={sobre} alt="about"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-box">
          <div className="row">
            <img src={Caua} alt="Cauã"/>
            <div className="row-text">
              <h1>Cauã Gabriel Pereira da Silva</h1>
              <p>Edição dos vídeos</p>
            </div>
          </div>
          <div className="row">
            <img src={Kamily} alt="Kamily"/>
            <div className="row-text">
              <h1>Kamily Maria Barboza Leduino</h1>
              <p>Pesquisas</p>
            </div>
          </div>
          <div className="row">
            <img src={Luiz} alt="Luiz"/>
            <div className="row-text">
              <h1>Luiz Felipe Silvestre de Castro</h1>
              <p>Gravação dos vídeos</p>
            </div>
          </div>
          <div className="row">
            <img src={Ulisses} alt="Ulisses"/>
            <div className="row-text">
              <h1>Ulisses Douglas de Paula Assis Junior</h1>
              <p>Desenvolvimento Web</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
