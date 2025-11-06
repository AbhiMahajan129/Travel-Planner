// src/assets/components/LanguageSelector.jsx

import React from 'react';
// 🟢 CORRECTED IMPORT PATH: Now we go up two levels (../..) to reach src/hooks
import useGoogleTranslate from '../../hooks/useGoogleTranslate'; 

const LanguageSelector = () => {
    const { changeLanguage } = useGoogleTranslate();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
    ];

    return (
        <div className="language-selector-container">
            {languages.map((lang) => (
                <button 
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    style={{ 
                        margin: '0 5px', 
                        padding: '5px 10px', 
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        backgroundColor: '#f8f8f8',
                        color: '#333',
                        fontSize: '14px'
                    }}
                >
                    {lang.name}
                </button>
            ))}
            
            {/* Required hidden div for Google Translate's internal functionality */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </div>
    );
};

export default LanguageSelector;