import React, { useState } from 'react'

const CharacterCount = () => {
    // Maximum allowed characters (default = 50)
    const [maxLength, setMaxLength] = useState(50)

    // User input text
    const [text, setText] = useState("")

    // Current number of characters typed
    const charCount = text.length

    // Warning threshold = 90% of maxLength
    const warningLimit = Math.floor(maxLength * 0.9)

    // True if user exceeds max length
    const overLimit = charCount > maxLength

    // True if user is close to the limit
    const warning = charCount >= warningLimit

    // Handle textarea changes
    function handleChange(e) {
        setText(e.target.value)
    }

    return (
      <div className="characterCount">
        <h1>Character Count</h1>
        <p>Track your input length with live character warnings.</p>

        <div className="container">

          {/* Input to change maximum allowed characters */}
          <div className="inputs">
            <label>
              Max length:
              <input
                type="number"
                min="0"
                max="1000"
                onChange={(e) => setMaxLength(Number(e.target.value))}
                data-testid="maxlength"
              />
            </label>
          </div>

          {/* Textarea for user input */}
          <textarea
            className="text"
            placeholder="Start Typing"
            data-testid="textarea"
            value={text}
            onChange={handleChange}
          ></textarea>

          {/* Character counter display */}
          <div className="char-info">
            {charCount} / {maxLength}
          </div>

          {/* Warning and error messages */}
          <div className="warnings">

            {/* Show error if limit exceeded */}
            {overLimit && (
              <p className="error-message" data-testid="error-text">
                {`Limit exceeded by ${charCount - maxLength} characters`}
              </p>
            )}

            {/* Show warning when close to limit */}
            {warning && !overLimit && (
              <p className="warning-text" data-testid="warning-text">
                You are close to the limit!
              </p>
            )}
          </div>
        </div>
      </div>
    )
}

export default CharacterCount
