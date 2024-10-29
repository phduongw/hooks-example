import {createContext, useState} from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    const value = {
        theme,
        toggleTheme
    }

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext };