import { useEffect, useState } from 'react';
import { Sun, Moon } from 'phosphor-react';

import * as S from './style';

const ThemeToggler = () => {
    const [theme, setTheme] = useState(() => {
        const storageTheme = localStorage.getItem('theme');

        if (!storageTheme)
            return 'light';

        return storageTheme;
    });

    const themeInverted = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.classList.add(theme);
        document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <S.Container>
            <S.Button 
                className={(theme === 'light' ? 'active' : '')} 
                onClick={() => setTheme(themeInverted)}
                title={`Alterar para tema ${themeInverted}`}
            >
                {
                    (theme === 'light') 
                        ? <Moon size={14} weight="fill" />
                        : <Sun size={14} weight="fill" />
                }
            </S.Button>
        </S.Container>
    );
}

export default ThemeToggler;