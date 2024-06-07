import React, { useState, useRef, useEffect } from "react";
import "./feature.css";

const Feature = ({ imgUrl, name, fb, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("100px");
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const contentRef = useRef(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current.scrollHeight > 100) {
      setNeedsReadMore(true);
    } else {
      setNeedsReadMore(false);
    }
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("100px");
    }
  }, [isExpanded, text]);

  return (
    <div className="jg__feature">
      <div className="jg__feature-person">
        <div className="jg__feature-person-pic">
          <img src={imgUrl} alt="person" />
        </div>
        <div className="jg__feature-person-info">
          <p>{name}</p>
          <p>{fb}</p>
        </div>
      </div>
      <div
        className="jg__feature-text-container"
        style={{ maxHeight: maxHeight }}
        ref={contentRef}
      >
        <div className="jg__feature-text">{text}</div>
      </div>
      {needsReadMore && (
        <button onClick={toggleReadMore} className="read-more-button">
          {isExpanded ? "Weniger lesen" : "Mehr lesen"}
        </button>
      )}
    </div>
  );
};

export default Feature;
