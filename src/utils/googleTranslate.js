// src/utils/googleTranslate.js

// वेबसाइट की मूल भाषा (Original Language)
export const PAGE_LANGUAGE = 'en'; 

// Google Translate Script को लोड करता है
export const loadGoogleTranslateScript = () => {
    if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        // callback function: window.googleTranslateElementInit
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
    }
};

// Google Translate के callback फ़ंक्शन को window पर परिभाषित करता है
export const defineInitFunction = () => {
    window.googleTranslateElementInit = () => {
        // TranslateElement को 'google_translate_element' को टारगेट करते हुए इनिशियलाइज़ करें
        new window.google.translate.TranslateElement(
            { 
                pageLanguage: PAGE_LANGUAGE, 
                // हम dropdown खुद दिखाएंगे, इसलिए autoDisplay false रहेगा
                autoDisplay: false, 
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE 
            },  
            'google_translate_element' // यह वह hidden div है जिसे हम टारगेट कर रहे हैं
        );
        console.log("Google Translate Initialized.");
    };
};

// Custom function to force translation (used by the new buttons)
export const changeLanguage = (newLanguageCode) => {
    // 100ms का छोटा विलंब (delay) ताकि सुनिश्चित हो सके कि Google ऑब्जेक्ट लोड हो गया है
    setTimeout(() => {
        if (window.google && window.google.translate && window.google.translate.TranslateElement.getInstance) {
            
            const instance = window.google.translate.TranslateElement.getInstance();
            
            if (newLanguageCode === PAGE_LANGUAGE) {
                // Reload page to reset translation
                window.location.reload(); 
            } else if (instance) {
                // Force translation
                instance.translatePage(PAGE_LANGUAGE, newLanguageCode);
            }
        } else {
            console.error('Google Translate object not ready.');
        }
    }, 100);
};

// समर्थित भाषाओं की सूची
export const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
];