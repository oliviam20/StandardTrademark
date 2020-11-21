import React, { useState } from 'react'

// import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect';
import Logo from '../components/Logo/Logo';
import Paragraph from '../components/Paragraph/Paragraph';
import SubHeading from '../components/SubHeading/SubHeading';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

import './App.scss';

function App() {
  const [lang, setLang] = useState('english');

  const changeLang = (event) => {
    setLang(event.currentTarget.dataset.language)
  }

  const englishTranslations = require('../stringTranslations/en.json');
  const chineseTranslations = require('../stringTranslations/ch.json');
  const activeLang = lang === 'english' ? englishTranslations : chineseTranslations;

  return (
    <div className="App">
      <VideoPlayer />
      <Logo />
      <section className="languageSection">
        {/* <div className="greyBackground"> */}
          <LanguageSelect
            activeLang={lang}
            lang="english"
            onHandleClick={changeLang}
          />
          <LanguageSelect
            activeLang={lang}
            lang="chinese"
            onHandleClick={changeLang}
          />
        {/* </div> */}
      </section>

      <section className="infoSection descriptionSection">
        <SubHeading text={activeLang.whatIsTrademarkTitle} />
        <Paragraph text={activeLang.whatIsTrademarkMessage} />
        <SubHeading text={activeLang.benefitsRegistrationTrademarkTitle} />
        <Paragraph text={activeLang.benefitsRegistrationTrademarkMessage} />
      </section>

      <section className="infoSection contactSection">
        <Contact />
      </section>
    </div>
  );
}

export default App;
