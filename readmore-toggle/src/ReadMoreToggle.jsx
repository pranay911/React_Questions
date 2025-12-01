import React, { useState } from 'react';

function ReadMoreToggle() {

  // `isReadMore` determines which version of the text we show.
  // true → show shorter text
  // false → show full text
  const [isReadMore, setIsReadMore] = useState(true)

  // Full text content
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  // Create a short preview of the text (first 100 characters)
  // Then append "..." to indicate more content is hidden
  const shorterText = text.substring(0, 100) + "..."

  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>

      {/* Display text based on state:
          - If isReadMore = true → shorterText
          - If isReadMore = false → full text */}
      <p className="readmore-text" data-testid="readmore-text">
        {isReadMore ? shorterText : text}
      </p>

      {/* Button toggles the value of isReadMore */}
      <button
        className="readmore-button"
        data-testid="readmore-button"
        // Clicking flips true ↔ false
        onClick={() => setIsReadMore(!isReadMore)}
      >
        {/* Button label changes dynamically */}
        {isReadMore ? "Read More" : "Read Less"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
