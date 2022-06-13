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
  let [accordionClasses, setAccordionClasses] = useState([
    { name: "Aula 1", content: "Videoaulas", isActive: false },
    { name: "Aula 2", content: "Exercícios", isActive: false },
    { name: "Aula 3", content: "Artigos", isActive: false },
  ]);

  function handleOpenAccordionItem(indexClass) {
    const newAccordionClasses = accordionClasses.map((item) => {
      item.isActive = false;
      return item;
    });

    let accordionItemSelected = newAccordionClasses[indexClass];

    accordionItemSelected.isActive = !accordionItemSelected.isActive;

    setAccordionClasses(newAccordionClasses);
  }

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
          {accordionClasses.map((item, index) => (
            <div className="accordion">
              <div className="acc-box">
                <div
                  className="acc-label"
                  onClick={() => handleOpenAccordionItem(index)}
                >
                  {item.name}
                </div>
                <div className={`acc-content ${item.isActive && "active"}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curso;
