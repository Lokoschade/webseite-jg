import React, { useState, useEffect } from "react";
import i18n from "../../i18n";
import german from "../../assets/german flag.svg";
import english from "../../assets/uk flag.svg";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = async (e) => {
    e.preventDefault();
    const language = e.currentTarget.dataset.language;
    console.log("Changing language to:", language);
    await i18n.changeLanguage(language); // Ensure the language is changed before updating state
    setSelectedLanguage(language);
  };

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setSelectedLanguage(lng);
    };
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div>
      <button type="button" data-language="de" onClick={chooseLanguage}>
        <img src={german} alt="Deutsch" />
      </button>
      <button type="button" data-language="en" onClick={chooseLanguage}>
        <img src={english} alt="English" />
      </button>
    </div>
  );
};

export default Language;
