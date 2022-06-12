import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";

// const useEffect(() => {
//   const accordion = document.getElementsByClassName('acc-box')
// for (var i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', () => {
//     this.classList.toggle('active')
//   })
// }
// }, [])

function Curso() {
  const [show, setShow] = useState(false);
  const Each = e => setShow(e.target.value);
  // onChange={Each}
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
              <div className="acc-label" onClick={() => setShow(!show)} >
                Aula 1
              </div>
              {show ? (
                <div className="acc-content active">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio non ducimus odio laboriosam, minus quia sequi quasi
                    eum assumenda hic facere, a eos necessitatibus possimus
                    dolorum quis illum voluptates? Eos!
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="accordion">
            <div className="acc-box">
              <div className="acc-label" onClick={() => setShow(!show)}>
                Aula 2
              </div>
              {show ? (
                <div className="acc-content active">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio non ducimus odio laboriosam, minus quia sequi quasi
                    eum assumenda hic facere, a eos necessitatibus possimus
                    dolorum quis illum voluptates? Eos!
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="accordion">
            <div className="acc-box">
              <div className="acc-label" onClick={() => setShow(!show)}>
                Aula 3
              </div>
              {show ? (
                <div className="acc-content active">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio non ducimus odio laboriosam, minus quia sequi quasi
                    eum assumenda hic facere, a eos necessitatibus possimus
                    dolorum quis illum voluptates? Eos!
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curso;
