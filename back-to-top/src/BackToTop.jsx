import React, { useEffect, useState } from 'react'

const BackToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}
      {[...Array(40)].map((_, i) => (
        <p>This is a paragraph {i + 1}</p>
      ))}

      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>}
      </div>
    </div>
  );
}

export default BackToTop