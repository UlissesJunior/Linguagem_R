import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import Course1 from "./img/course-1.png"

function Curso() {
  let [accordionClasses, setAccordionClasses] = useState([
    { name: "Aula 1", content: "Vídeo: https://drive.google.com/file/d/1CIWJ_2ugbshboqcr59BIX81eOLV-JqDJ/view?usp=sharing", isActive: false },
    { name: "Aula 2", content: "Vídeo: https://drive.google.com/file/d/1REyrefx7l49PmhDXaPcSFfrLkFU-_v7d/view?usp=sharing", isActive: false },
    { name: "Aula 3", content: "Vídeo: https://drive.google.com/file/d/16Dvb20uPD7NPS-guNirL_5HQXtc4yzN3/view?usp=sharing", isActive: false },
    { name: "Aula 4", content: "Vídeo: https://drive.google.com/file/d/1K4bVwL-8RNyS3lIiZKYnYFEmJb7nC8SM/view?usp=sharing", isActive: false },
    { name: "Aula 5", content: "Vídeo: https://drive.google.com/file/d/1ebAaPgldxtER581dHJLtvzf6X80CIARw/view?usp=sharing", isActive: false },
    { name: "Aula 6", content: "Vídeo: https://drive.google.com/file/d/1ceabgkl-0eemo2dRdm1Orw_JfJGZIVte/view?usp=sharing", isActive: false }, //aqui
    { name: "Aula 7", content: "Vídeo: https://drive.google.com/file/d/1ebAaPgldxtER581dHJLtvzf6X80CIARw/view?usp=sharing", isActive: false },
    { name: "Aula 8", content: "Vídeo: https://drive.google.com/file/d/1K4bVwL-8RNyS3lIiZKYnYFEmJb7nC8SM/view?usp=sharing", isActive: false },
    { name: "Aula 9", content: "Vídeo: https://drive.google.com/file/d/16Dvb20uPD7NPS-guNirL_5HQXtc4yzN3/view?usp=sharing", isActive: false },
    { name: "Aula 10", content: "Vídeo: https://drive.google.com/file/d/1REyrefx7l49PmhDXaPcSFfrLkFU-_v7d/view?usp=sharing", isActive: false },
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
            <div className="right">
              <img src={Course1} alt="curso" />
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