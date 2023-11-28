import React, { useState, useContext, useReducer, useEffect } from 'react'

const { createContext} = require("react");

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    return <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}