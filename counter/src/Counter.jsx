import React, { useState } from 'react'

// Counter component
const Counter = () => {

    // count → holds the current counter value
    // setCount → function to update the count
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* Display current counter value */}
            <h2>Counter: {count}</h2>

            {/* Increase count by 1 */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            {/* Decrease count by 1 */}
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>

            {/* Reset count back to 0 */}
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}

export default Counter
