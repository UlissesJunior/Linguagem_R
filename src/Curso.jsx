import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import Course1 from "./img/course-1.png";

function Curso() {
  let [accordionClasses, setAccordionClasses] = useState([
    {
      name: "Aula 1 - O que é R?",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/1CIWJ_2ugbshboqcr59BIX81eOLV-JqDJ/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "/docs",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    },
    {
      name: "Aula 2 - Variáveis em R",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/1REyrefx7l49PmhDXaPcSFfrLkFU-_v7d/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "https://docs.google.com/document/d/1pWaPidqL5x3UTIQytR6lbO5a6Oacu5H1/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    },
    {
      name: "Aula 3 - Funções",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/16Dvb20uPD7NPS-guNirL_5HQXtc4yzN3/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "https://docs.google.com/document/d/1tT3kYyTUfy9eXZNaSNSBQFWhl9zpkBOp/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    },
    {
      name: "Aula 4 - Operações Matemáticas",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/1K4bVwL-8RNyS3lIiZKYnYFEmJb7nC8SM/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "https://docs.google.com/document/d/1P2jYWEk43Q-1NjCQsvEJKhxfC0uhJBwJ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    },
    {
      name: "Aula 5 - Operadores Lógicos",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/1ebAaPgldxtER581dHJLtvzf6X80CIARw/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "https://docs.google.com/document/d/1k-BkD41ZIu1DRmbhqOsAWa1rvq6wGLO_/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    },
    {
      name: "Aula 6 - Funções Matemáticas",
      contentVideo: "Vídeo",
      linkVideo: "https://drive.google.com/file/d/1ceabgkl-0eemo2dRdm1Orw_JfJGZIVte/view?usp=sharing",
      contentDoc: "Documentação",
      linkDoc: "https://docs.google.com/document/d/1_WL3-jGQC0PHVHAfC6Qz2hw9bYFXaKxA/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      contentBibliografia: "Bibliografia",
      linkBibliografia: "https://docs.google.com/document/d/1BtOiliFO4xCMBg2TIeuiTRiqGVlzwjfQ/edit?usp=sharing&ouid=110349557058058531133&rtpof=true&sd=true",
      isActive: false,
    }, 
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
          <div className="container-box .center-row" style={{ padding: "0px" }}>
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
                  <ExternalLink href={item.linkVideo}>
                    <p>{item.contentVideo}</p>
                  </ExternalLink>
                  <ExternalLink href={item.linkDoc}>
                    <p>{item.contentDoc}</p>
                  </ExternalLink>
                  <ExternalLink href={item.linkBibliografia}>
                    <p>{item.contentBibliografia}</p>
                  </ExternalLink>
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
