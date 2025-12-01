import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  
  // activeTab stores the index of the currently selected tab.
  // null = no tab selected initially
  const [activeTab, setActiveTab] = useState(null)

  // If no tabs are passed → show a simple fallback message
  if (tabs.length === 0) {
    return <div>No tabs available</div>
  }

  return (
    <div>
      {/* TAB HEADERS */}
      <div style={{ display: "flex", cursor: "pointer", gap: "10px" }}>
        {tabs.map((tab, index) => (
          
          // Each tab header is clickable
          <div
            key={index}
            onClick={() => setActiveTab(index)}

            // Highlight the active tab using a blue underline
            style={{
              borderBottom: activeTab === index ? "2px solid blue" : "none",
              marginRight: "10px",
              padding: "10px 20px"
            }}
          >
            {/* Show a title OR fallback title */}
            <h2>{tab.title || `Tab ${index + 1}`}</h2>
          </div>
        ))}
      </div>

      {/* TAB CONTENT AREA */}
      <div style={{ marginTop: "10px" }}>
        {/* If activeTab is null → tabs[null] is undefined, so render fallback */}
        {tabs[activeTab]?.content || "No content available"}
      </div>
    </div>
  )
}

export default Tabs
