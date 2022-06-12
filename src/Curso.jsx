import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

const accordion = document.getElementsByClassName(".acc-box")
for (var i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    this.classList.toggle(".active")
  })
}

function Curso() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box .center-row">
            <div className="left">
              <h1>Curso</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-box">
          <div className="accordion">
            <div className="acc-box">
              <div className="acc-label">List</div>
              <div className="acc-content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non ducimus odio laboriosam, minus quia sequi quasi eum assumenda hic facere, a eos necessitatibus possimus dolorum quis illum voluptates? Eos!</p></div>
            </div>
          </div>
          <div className="accordion">
            <div className="acc-box">
              <div className="acc-label">List Two</div>
              <div className="acc-content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non ducimus odio laboriosam, minus quia sequi quasi eum assumenda hic facere, a eos necessitatibus possimus dolorum quis illum voluptates? Eos!</p></div>
            </div>
          </div>
          <div className="accordion">
            <div className="acc-box">
              <div className="acc-label">List Three</div>
              <div className="acc-content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non ducimus odio laboriosam, minus quia sequi quasi eum assumenda hic facere, a eos necessitatibus possimus dolorum quis illum voluptates? Eos!</p></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curso;
