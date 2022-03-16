import React, { useState } from "react";
import Days from "./Days";

const QuoteSection = ({ randomquote, author }) => {
  const [showDays, setShowDays] = useState(false);
  const onMenuClick = () => {
    if (showDays === true) {
      setShowDays(false);
    } else {
      setShowDays(true);
    }
  };
  return (
    <div className="quotes-section">
      <div className="quotes">
        <blockquote>{randomquote}</blockquote>
        <span>----{author}</span>
      </div>
      <div>{showDays ? <Days /> : null}</div>
      <div className="quotes-section menu-button" onClick={onMenuClick}>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default QuoteSection;
