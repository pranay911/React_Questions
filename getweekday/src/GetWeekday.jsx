import React from 'react'
import { useState } from 'react'

const GetWeekday = () => {
    // State to store the selected date
    const [date, setDate] = useState("")

    // State to store the weekday name
    const [weekday, setWeekDay] = useState("")

    // Function to extract the weekday from a selected date
    const getDay = (date) => {
        // If no date selected, do nothing
        if (!date) { return }

        // Convert the date string into a JS Date object
        const newDate = new Date(date)

        // Options to extract only the weekday in long format (e.g., Monday)
        const options = { weekday: "long" }

        // Convert date into readable weekday
        const dayName = newDate.toLocaleDateString("en-US", options)

        // Update state
        setWeekDay(dayName)
    }

    return (
        <div className="container">
            <h1>Get Weekday</h1>

            {/* Date Input */}
            <input
                type="date"
                data-testid="date-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            {/* Button to trigger weekday calculation */}
            <button
                onClick={() => getDay(date)}
                data-testid="find-day-btn"
            >
                Find Day
            </button>

            {/* Show result only when weekday has a value */}
            {weekday && (
                <div className='result' data-testid="result">
                    That date falls on <strong>{weekday}</strong>
                </div>
            )}
        </div>
    )
}

export default GetWeekday
