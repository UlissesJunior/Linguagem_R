import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function Curso() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="box">
          <div className="container">
            <div className="container-box">
            <div className="left">
              <h1>Curso</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curso;
