import React, { useState } from 'react';
import languages from '../language/language'

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(languages.english);

    const toggleLanguage = () => {
        if (language === languages.vietnamese) {
            setLanguage(languages.english)
        } else {
            setLanguage(languages.vietnamese)
        }
    }

    return <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {props.children}
    </LanguageContext.Provider>
}

export { LanguageProvider, LanguageContext }