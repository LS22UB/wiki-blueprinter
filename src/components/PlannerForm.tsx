// src/components/PlannerForm.js
import React, { useState } from 'react';
interface Errors {
    category?: string;
    textInput?: string;
}
const PlannerForm = () => {
    const [category, setCategory] = useState("");          // Für Dropdown-Auswahl
    const [options, setOptions] = useState([]);            // Für Checkbox-Auswahl
    const [textInput, setTextInput] = useState("");        // Für Texteingabe
    const [droppedItems, setDroppedItems] = useState([]);  // Für DropArea
    const [errors, setErrors] = useState<Errors>({});  
    const [urlSafety, setUrlSaftey] = useState(""); 
    const [villageInput, setVillageInput] = useState(""); 

    const villages = ["Climate Crisis", "Bioremediation", "Conservation", "Agriculture", "Food & Nutrition", "Fashion & Cosmetics",
        "Diagnostics", "Therapeutics", "Oncology", "Infectious Diseases", "Space", "Foundational Advance", "Software & AI", "Biomanufacturing"
    ];
    const specialprizes = ["Best Education", "Best Entrepreneurship", "Best Hardware", "Inclusivity Award", "Best Integrated Human Practices"
        , "Best Measurement", "Best Model", "Best New Basic Part", "Best New Composite Part", "Best New Improved Part", "Best Part Collection", 
        "Best Plant Synthetic Biology"
    ];
    const activities = ["Wet Lab", "Dry Lab", "Modeling", "Collaborations", "Handbooks", "MeetUps"]
    const further = ["University Page", "Supplementary Page", "Materials and Methods", "Team Documentation", "Sponsors", "MeetUps", "Judging"]
    const umfang = ["Only the essentials", "Solid middle ground", "Extensive"]; 
    const urlsafety = ["Everything has to be on the standard url pages", "Everything has to be reachable from standard url pages", "Contents can be distributed as pleases"]
    // Dropdown-Änderung
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    const handleUrlSafetyChange = (e) => {
        setUrlSaftey(e.target.value);
    };
    const handleVillageChange = (e) => {
        setVillageInput(e.target.value); 
    }

    // Checkbox-Änderung
    const handleCheckboxChange = (option) => {
        if (options.includes(option)) {
            setOptions(options.filter((item) => item !== option));
        } else {
            setOptions([...options, option]);
        }
    };

    // Texteingabe-Änderung
    const handleTextChange = (e) => {
        setTextInput(e.target.value);
    };

    // Drag-and-Drop-Element hinzufügen
    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!category) newErrors.category = "Kategorie ist erforderlich";
        if (!textInput.trim()) newErrors.textInput = "Textfeld ist erforderlich";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = {
                category,
                options,
                textInput,
                droppedItems,
            };

            console.log("Formulardaten:", formData);
            alert(`Formular erfolgreich gesendet: ${JSON.stringify(formData, null, 2)}`);
            
            setCategory('');
            setOptions([]);
            setTextInput('');
            setDroppedItems([]);
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Planer-Formular</h2>
            {/* Dropdown-Menü */}
            <div >
                        <label>Your village:</label>
                        <select value={villageInput} onChange={handleVillageChange}>
                            <option value="">Please choose...</option>
                            {villages.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
            <div className='row'>
                <div className='col'>
                    
                   
                    <h3>Select activities you did or plan to do:</h3>
                    {activities.map((option) => (
                        <label key={option} style={{ display: 'block' }}>
                            <input
                                type="checkbox"
                                checked={options.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    ))}
             
                
              
                </div>
                 {/* Checkboxen */}
                <div className='col'>
                    <h3>Select your special prizes:</h3>
                    {specialprizes.map((option) => (
                        <label key={option} style={{ display: 'block' }}>
                            <input
                                type="checkbox"
                                checked={options.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className='col'>
                <h3>Further options:</h3>
                    {further.map((option) => (
                        <label key={option} style={{ display: 'block' }}>
                            <input
                                type="checkbox"
                                checked={options.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <br/>
            <div className='row'>
                <details>
                    <summary>
                        Open if you want to be very specific...
                    </summary>
                    <div className='row'>
                        <div className='col'>
                        <h3>Further options:</h3>
                            {further.map((option) => (
                                <label key={option} style={{ display: 'block' }}>
                                    <input
                                        type="checkbox"
                                        checked={options.includes(option)}
                                        onChange={() => handleCheckboxChange(option)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                    
                </details>
            </div>
            {/* Dropdown-Menü */}
            <div >
                <label>How extensive do you want your wiki to be?</label>
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">Please choose...</option>
                    {umfang.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>How safe do you want to play it with the standard urls?</label>
                <select value={urlSafety} onChange={handleUrlSafetyChange}>
                    <option value="">Please choose...</option>
                    {urlsafety.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

           


            {/* Absenden-Button */}
            <button type="submit" style={{ marginTop: '20px' }}>Absenden</button>
        </form>
    );
};

export default PlannerForm;
