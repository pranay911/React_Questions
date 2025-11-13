import React, { useState } from 'react'

const ChipsInput = () => {
    const [inputText,setInputText]=useState("")
    const [chips,setChips]=useState([])

     // ADD NEW CHIPS
    const handleKeyDown =(e)=>{
        // CHECK ENTER KEY IS PRESSED
        if(e.key === 'Enter' && inputText.trim() !== ""){
            // Add chip
            setChips(prev=>[...prev, inputText.trim()])
            // CLEAR THE INPUT BOX
            setInputText("")
        }
    }

    const handleDelete =(index)=>{
        // REMOVE VALUE ON INDEX FROM CHIPS ARRAY
         // SHALLOW COPY
        const newChips = [...chips]
        newChips.splice(index, 1)
        setChips(newChips);
    }

  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}><h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
        onKeyDown={(e)=>handleKeyDown(e)}
        
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {
        chips.map((chip, index) => (
          <div
            key={index}
            style={{
              background: "gray",
              margin: "5px",
              padding: "8px 12px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            {chip}
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                marginLeft: "8px",
                cursor: "pointer",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleDelete(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      </div>
  )
}

export default ChipsInput