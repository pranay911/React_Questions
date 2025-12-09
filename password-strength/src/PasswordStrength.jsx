import React, { useState } from 'react'

// -------------------------------------------
// EXPORTABLE PURE FUNCTION FOR TESTING
// -------------------------------------------
export const checkPasswordStrength = (password) => {

    // Conditions to check password complexity
    const checks = [
        password.length >= 8,          // Minimum length
        /[A-Z]/.test(password),        // Contains uppercase letter
        /[a-z]/.test(password),        // Contains lowercase letter
        /[0-9]/.test(password),        // Contains digit
        /[^A-Za-z0-9]/.test(password)  // Contains special character
    ];

    // Count how many conditions passed
    const passed = checks.filter(Boolean).length;

    // Return level based on number of passed checks
    if (passed === 1) return "Level 1";
    if (passed >= 2 && passed <= 3) return "Level 2";
    if (passed >= 4 && passed <= 5) return "Level 3";
 
    return "Weak Password";
};

// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------
const PasswordStrength = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    // Trigger checking when user clicks button
    const handleCheck = () => {
        setStrength(checkPasswordStrength(password));
    };

    return (
        <div>
            <h2>Password Strength Checker</h2>

            {/* Controlled input field */}
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* Button that evaluates password */}
            <button onClick={handleCheck}>Check Strength</button>

            {/* Conditional rendering of strength */}
            {strength && (
                <p>
                    Strength: <strong>{strength}</strong>
                </p>
            )}
        </div>
    );
};

export default PasswordStrength;
