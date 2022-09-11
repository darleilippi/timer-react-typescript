import React, { useState } from 'react';

type TypeTheme = "light" | "dark";

interface PropsThemeContext {
    theme: TypeTheme;
    setTheme: React.Dispatch<React.SetStateAction<TypeTheme>>;
}

const DEFAULT_THEME: PropsThemeContext = {
    theme: "light",
    setTheme: () => {}
}

export const ThemeContext = React.createContext<PropsThemeContext>(DEFAULT_THEME);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(DEFAULT_THEME.theme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;