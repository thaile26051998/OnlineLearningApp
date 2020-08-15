import React, { useState } from 'react';
import themes from '../theme/theme'

const ThemeContext = React.createContext();

const ThemeProvier = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        if(theme === themes.light){
            setTheme(themes.dark)
        }else{
            setTheme(themes.light)
        }
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
}

export { ThemeProvier, ThemeContext }