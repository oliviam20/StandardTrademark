import React, { useState } from "react";

// import Header from '../components/Header/Header';
import Btn from "../components/Btn/Btn";
import Card from "../components/Card/Card";
import Contact from "../components/Contact/Contact";
import Description from "../components/Description/Description";
import Divider from "../components/Divider/Divider";
import Paragraph from "../components/Paragraph/Paragraph";
import SubHeading from "../components/SubHeading/SubHeading";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

import "./App.scss";

function App() {
  const [lang, setLang] = useState("english");

  const changeLang = (event) => {
    setLang(event.currentTarget.dataset.text);
  };

  const englishTranslations = require("../stringTranslations/en.json");
  const chineseTranslations = require("../stringTranslations/ch.json");
  const activeLang =
    lang === "english" ? englishTranslations : chineseTranslations;

  const [navActive, setNavActive] = useState("ourServicesTitle");

  const changeNav = (event) => {
    setNavActive(event.currentTarget.dataset.text);
  };

  const navigationButtons = [
    "ourServicesTitle",
    "theTeamTitle",
    "applicationFormTitle",
    "trademarkClassificationTitle",
  ];

  const downloadClick = () => {
    const newWindow = window.open(
      "https://res.cloudinary.com/dwfzniyyh/raw/upload/v1606215925/standard%20trademark/Standard_Trademark_Application_formR-2015.docx"
    );
    newWindow.opener = null;
  };

  return (
    <div className="App">
      <VideoPlayer />
      <div className="graphicWrapper">
        <div className="graphicBackground" />
      </div>
      {/* <Logo /> */}
      <section className="languageSection">
        <Btn
          activeText={lang}
          dataText="english"
          text="english"
          onHandleClick={changeLang}
          styles={{ fontSize: "0.8rem" }}
        />
        <Btn
          activeText={lang}
          dataText="中文"
          text="中文"
          onHandleClick={changeLang}
          styles={{ fontSize: "0.8rem" }}
        />
      </section>

      <section className="infoSection descriptionSection sectionWrapper">
        <Card>
          <SubHeading text={activeLang.whatIsTrademarkTitle} />
          <Paragraph text={activeLang.whatIsTrademarkMessage} />
          <div style={{ height: "1rem" }} />
          <SubHeading text={activeLang.benefitsRegistrationTrademarkTitle} />
          <Paragraph text={activeLang.benefitsRegistrationTrademarkMessage} />
        </Card>
      </section>

      <div className="infoSection">
        <Divider />
      </div>

      <nav className="infoSection navigationSection">
        {navigationButtons.map((navBtn, index) => (
          <Btn
            key={index}
            activeText={navActive}
            dataText={navBtn}
            text={activeLang[navBtn]}
            onHandleClick={changeNav}
          />
        ))}
      </nav>

      <section className="infoSection">
        <Card>
          {navActive === "ourServicesTitle" && (
            <Description
              title={activeLang.ourServicesTitle}
              text={activeLang.ourServicesMessage}
            />
          )}
          {navActive === "theTeamTitle" && (
            <Description
              title={activeLang.theTeamTitle}
              text={activeLang.theTeamMessage}
            />
          )}
          {navActive === "applicationFormTitle" && (
            <button
              className="downloadFormBtn"
              type="button"
              onClick={downloadClick}
            >
              <div className="downloadText">
                <i className="fa fa-3x fa-cloud-download" aria-hidden="true" />
                {activeLang.downloadApplicationForm}
              </div>
            </button>
          )}
          {navActive === "trademarkClassificationTitle" && (
            <Description
              title={activeLang.trademarkClassificationTitle}
              text={activeLang.trademarkClassificationMessage}
              classes={activeLang.trademarkClassificationClasses}
            />
          )}
        </Card>
      </section>

      <div className="infoSection">
        <Divider />
      </div>

      <section className="infoSection contactSection">
        <Contact />
      </section>
    </div>
  );
}

export default App;
