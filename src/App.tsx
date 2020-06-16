import React from "react";
import {
  Banner,
  Online,
  Benefits,
  Order,
  Additional,
  Sale,
  Useful,
  Footer,
} from "./components";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <Banner lang={lang} changeLang={handleLangChange} />
      <Sale />
      <Online />
      <Benefits />
      <Order />
      <Useful />
      <Footer />
    </div>
  );
}

export default App;
