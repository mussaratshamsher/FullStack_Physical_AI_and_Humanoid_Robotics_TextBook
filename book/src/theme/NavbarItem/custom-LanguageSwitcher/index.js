import React, { useEffect, useState } from 'react';

const CustomLanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
  });

  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'ur', label: 'Urdu' },
  ];

  const triggerGoogleTranslate = (langCode) => {
    if (typeof window === 'undefined') return;

    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    } else {
      console.warn('Google Translate select element not found.');
    }
  };
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // 1. Define the callback function, but only if it doesn't exist.
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        // After init, trigger translation for the stored language
        const storedLang = localStorage.getItem('selectedLanguage') || 'en';
        if (storedLang !== 'en') {
            // Use a timeout to give the widget time to be ready
            setTimeout(() => triggerGoogleTranslate(storedLang), 500);
        }
      };
    }

    // 2. Add the script tag, but only if it doesn't exist.
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
    // No cleanup function is needed, as we want the script and widget to persist globally.
  }, []); // Run only once for the entire app lifecycle.

  const handleDropdownChange = (langCode) => {
    setSelectedLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
    triggerGoogleTranslate(langCode);
  };

  return (
    <div className="navbar__item dropdown dropdown--hoverable">
      <a className="navbar__item navbar__link" href="#" onClick={(e) => e.preventDefault()}>
        {availableLanguages.find(lang => lang.code === selectedLanguage)?.label || 'Language'}
      </a>
      <ul className="dropdown__menu">
        {availableLanguages.map((lang) => (
          <li key={lang.code}>
            <a
              className={`dropdown__link ${selectedLanguage === lang.code ? 'dropdown__link--active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownChange(lang.code);
              }}
            >
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
      <div id="google_translate_element" style={{ display: 'none' }} />
    </div>
  );
};

export default CustomLanguageSwitcher;
