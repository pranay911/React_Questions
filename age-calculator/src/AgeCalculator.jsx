import React, { useState } from 'react'

const AgeCalculator = () => {
    const [age, setAge] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState("")

    const calculateAge = () => {
        setError("")
        const birthDate = new Date(date)
        if (!date) {
            setError("Please select a date")
            setAge(null)
            return
        }
        const today = new Date()
        if (birthDate > today) {
            setError("Birthdate cannot be in the future")
            setAge(null)
            return
        }
        let years = today.getFullYear() - birthDate.getFullYear()
        let months = today.getMonth() - birthDate.getMonth()
        let days = today.getDate() - birthDate.getDate()
        if (months < 0 || (months === 0 && days < 0)) {
            years--
            months += months < 0 ? 11 : 0
            days += days < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() : 0
        }
        setAge(`${years} years, ${months} months, and ${days} days`)
        setError("")
    }
    return (
        <div className="conatiner">
            <h2 className="title"></h2>
            <label data-testid="label-birthdate" className="label">
                Enter/Select a birthdate:
            </label>
            <input id="birthdate" data-testid="input-birthdate" value={date} onChange={(e) => setDate(e.target.value)} type="date" className="input-date" />
            <button data-testid="btn-calculate" onClick={calculateAge} className="btn-calc">Calculate Age</button>
            {error && <p data-testid="error-msg" className="error-msg">{error}</p>}
            {age && <p data-testid="age-result" className="age-result">{age}</p>}
        </div>
    )
}

export default AgeCalculator