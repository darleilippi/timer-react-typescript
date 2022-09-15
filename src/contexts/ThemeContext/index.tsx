import React, { useState } from 'react';

type ThemeType = "light" | "dark";
type switchThemeType = (theme: ThemeType) => void

interface PropsThemeContext {
    theme: ThemeType;
    switchTheme: switchThemeType;
}

const DEFAULT_THEME: PropsThemeContext = {
    theme: "light",
    switchTheme: () => {}
}

export const ThemeContext = React.createContext<PropsThemeContext>(DEFAULT_THEME);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(DEFAULT_THEME.theme);

    const switchTheme = (theme: ThemeType) => setTheme(theme);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;