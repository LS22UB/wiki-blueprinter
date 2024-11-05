// src/components/MultipleChoice.js
import React from 'react';

const MultipleChoice = ({ selectedOptions, onOptionChange }) => {
    const options = ["Climate Crisis", "Bioremediation", "Conservation", "Agriculture", "Food & Nutrition", "Fashion & Cosmetics",
        "Diagnostics", "Therapeutics", "Oncology", "Infectious Diseases", "Space", "Foundational Advance", "Software & AI", "Biomanufacturing"
    ]; // Liste der verfügbaren Optionen

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            onOptionChange(selectedOptions.filter((item) => item !== option));
        } else {
            onOptionChange([...selectedOptions, option]);
        }
    };

    return (
        <div>
            <h3>Choose your Village and Special Prizes</h3>
            {options.map((option) => (
                <label key={option} style={{ display: 'block', margin: '4px 0' }}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default MultipleChoice;
