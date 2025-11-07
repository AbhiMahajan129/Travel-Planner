// src/hooks/useGoogleTranslate.js - (Code remains the same)

import { useEffect } from 'react';

const PAGE_LANGUAGE = 'en'; 

const useGoogleTranslate = () => {
    // ... (rest of the defineInitFunction, loadScript functions)
    const defineInitFunction = () => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { 
                    pageLanguage: PAGE_LANGUAGE, 
                    autoDisplay: false, 
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE 
                },  
                'google_translate_element' 
            );
            console.log("Google Translate Initialized.");
        };
    };

    const loadScript = () => {
        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
        }
    };
    
    const changeLanguage = (newLanguageCode) => {
        if (window.google && window.google.translate && window.google.translate.TranslateElement.getInstance) {
            
            const instance = window.google.translate.TranslateElement.getInstance();
            
            if (newLanguageCode === PAGE_LANGUAGE) {
                window.location.reload(); 
            } else if (instance) {
                instance.translatePage(PAGE_LANGUAGE, newLanguageCode);
            }
        } else {
            setTimeout(() => changeLanguage(newLanguageCode), 100);
        }
    };

    useEffect(() => {
        defineInitFunction();
        loadScript();
    }, []);

    return { changeLanguage };
};

export default useGoogleTranslate;