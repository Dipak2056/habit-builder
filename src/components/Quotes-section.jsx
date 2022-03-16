import React from "react";
import Days from "./Days";

const QuoteSection = () => {
  return (
    <div className="quotes-section">
      <div className="quotes">
        <blockquote>Never give up.</blockquote>
      </div>
      <Days />

      <div className="quotes-section menu-button">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default QuoteSection;
