import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function About() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box .center-row">
            <div className="left">
              <h1>Sobre</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-box">
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
