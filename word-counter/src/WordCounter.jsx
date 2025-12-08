import { useState, useEffect } from "react";

function WordCounter() {
    // text: stores the input text from the textarea
    const [text, setText] = useState("");

    // count: stores the final array of [word, occurrences]
    const [count, setCount] = useState([]);

    function handleCount() {
        // Normalize text → lowercase, remove punctuation, and trim spaces
        const cleanedText = text
            .toLowerCase()
            .replace(/[^a-zA-Z\s]/g, "")   // remove non-alphabetic characters
            .trim();

        // Split by spaces and remove empty entries
        const words = cleanedText.split(/\s+/).filter((word) => word.length > 0);

        // Count each word using Map()
        const wordMap = new Map();

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            wordMap.set(word, (wordMap.get(word) || 0) + 1);
        }

        // Convert Map → Array and sort by frequency (descending)
        const sortedArray = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);

        // Store final result in state
        setCount(sortedArray);
    }

    useEffect(() => {
        // Recalculate counts every time text changes
        handleCount();
    }, [text]);

    return (
        <div className="wordCounter">
            <h1>Word Counter</h1>

            <div className="container">
                <textarea
                    className="textarea"
                    placeholder="Type your text here"
                    data-testid="textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                {/* Only show results when words exist */}
                {count.length > 0 && (
                    <div className="results">
                        <h3>Word Frequencies</h3>

                        <ul data-testid="result-list">
                            {count.map(([word, count], index) => (
                                <li key={word} data-testid={`word-${word}`}>
                                    <strong>{word}</strong> count: {count}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WordCounter;
  