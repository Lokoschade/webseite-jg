import React from "react";
import i18n from "../../i18n";
import german from "../../assets/german flag.svg";
import english from "../../assets/uk flag.svg";

const Language = () => {
  const chooseLanguage = async (e) => {
    e.preventDefault();
    const language = e.currentTarget.dataset.language;
    console.log("Changing language to:", language);
    await i18n.changeLanguage(language);
  };

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
