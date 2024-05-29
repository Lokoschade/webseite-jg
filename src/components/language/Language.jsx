import React, { useState } from "react";
import i18n from "../../i18n";
import german from "../../assets/german flag.svg";
import english from "../../assets/uk flag.svg";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <button type="button" value="de" onClick={chooseLanguage}>
        <img src={german} alt="Deutsch" />
      </button>
      <button type="button" value="en" onClick={chooseLanguage}>
        <img src={english} alt="English" />
      </button>
    </div>
  );
};

export default Language;
