import React, { useEffect, useState } from 'react'

// BackToTop component: shows page content and a "Back to Top" button
// that appears once the user scrolls down past 400px and smoothly scrolls
// the page back to the top when clicked.
const BackToTop = () => {
  // isVisible: whether the back-to-top button should be shown
  const [isVisible, setIsVisible] = useState(false);

  // useEffect adds a scroll listener on mount and removes it on unmount.
  useEffect(() => {
    // handleScroll runs on every scroll event
    function handleScroll() {
      // window.scrollY is the number of pixels the document is currently scrolled vertically
      if (window.scrollY > 400) {
        // user scrolled down more than 400px → show button
        setIsVisible(true)
      } else {
        // user is near top → hide button
        setIsVisible(false)
      }
    }

    // attach the listener
    window.addEventListener("scroll", handleScroll)

    // cleanup function: remove the listener when component unmounts
    // to avoid memory leaks and duplicate listeners
    return () => window.removeEventListener("scroll", handleScroll)
  }, []); // empty dependency array → run once on mount and cleanup on unmount

  // scrollToTop triggers a smooth scroll animation to the top of the page
  function scrollToTop() {
    // window.scrollTo with behavior: "smooth" performs an animated scroll
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* This block creates content so the page is scrollable in examples/demo */}
      {[...Array(40)].map((_, i) => (
        // each paragraph is labeled; using index for keys in static demo arrays is acceptable
        <p key={i}>This is a paragraph {i + 1}</p>
      ))}

      <div className="container">
        {/* 
          Conditionally render the button only when isVisible is true.
          data-testid is useful for automated testing (e.g., React Testing Library)
        */}
        {isVisible && (
          <button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}

export default BackToTop
