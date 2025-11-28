import React, { useState } from 'react'
import { marked } from "marked"; 
// marked: A library that converts Markdown text → HTML

const MarkdownEditor = () => {

  // State to store user’s markdown input
  const [input, setInput] = useState("")

  // Update input state whenever textarea changes
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  // Convert Markdown to HTML and return it in a safe wrapper
  const getMarkDownText = () => {
    return { __html: marked.parse(input) }
    // __html is required because we are injecting HTML (dangerouslySetInnerHTML)
  }

  return (
    <div className="editor-container">
      
      {/* LEFT SIDE — Markdown Input */}
      <div className="editor-section">
        <h2>Markdown Input</h2>

        <textarea
          className="markdown-input"
          placeholder="Write Markdown here..."
          value={input}
          onChange={handleChange} // updates text on typing
        />
      </div>

      {/* RIGHT SIDE — HTML Preview */}
      <div className="preview-section">
        <h2>Live Preview</h2>

        <div
          className="markdown-preview"
          role="region"
          // Insert generated HTML into dom
          dangerouslySetInnerHTML={getMarkDownText()}
        />
      </div>

    </div>
  )
}

export default MarkdownEditor
