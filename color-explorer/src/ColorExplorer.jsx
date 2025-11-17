import React, { useState } from 'react'
import { colorNameToHex } from "./colorData"; 
// This function converts a color name (e.g., 'red') to its hex code (e.g., '#FF0000')

const ColorExplorer = () => {

  // State to store user input text
  const [input, setInput] = useState("")

  // State to store selected color object: { name: "blue", hex: "#0000FF" }
  const [color, setColor] = useState(null)

  // State to store error message if color is not found
  const [error, setError] = useState("")

  // Function runs when user clicks the search button
  const handleSearch = () => {
    // Convert input color name to hex value (or null if not found)
    const hex = colorNameToHex(input.trim().toLowerCase())

    if (hex) {
      // If color is valid → update UI with color information
      setColor({ name: input, hex })
      setError("")
    } else {
      // If invalid color → show error message
      setError("Sorry, I couldn't recognize that color.")
      setColor(null)
    }
  }

  return (
    <div className="container">
      <h1>Color Explorer</h1>

      {/* INPUT SECTION */}
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Updates input state
        />

        {/* Search button */}
        <button data-testid="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      {/* ERROR MESSAGE */}
      {error && <p className="error" data-testid="error-msg">{error}</p>}

      {/* SHOW COLOR DETAILS IF AVAILABLE */}
      {color && (
        <div className="color-box" data-testid="color-box">
          
          {/* Preview box showing the background color */}
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: color.hex }}
          ></div>

          {/* Display color name */}
          <p data-testid="color-name">
            <strong>Name:</strong> {color.name}
          </p>

          {/* Display color hex code */}
          <p data-testid="color-hex">
            <strong>Hex:</strong> {color.hex}
          </p>

        </div>
      )}
    </div>
  )
}

export default ColorExplorer
