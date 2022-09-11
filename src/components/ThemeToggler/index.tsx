import { useContext } from 'react';
import { Sun, Moon } from 'phosphor-react';
import { ThemeContext } from '../../contexts/ThemeContext';

import * as S from './style';

const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <S.Container>
            <S.ButtonLight 
                className={(theme === 'light' ? 'active' : '')} 
                onClick={() => setTheme('light')}
                title="Alterar para tema claro"
            >
                <Sun size={14} weight="fill" />
            </S.ButtonLight>
            <S.ButtonDark 
                className={(theme === 'dark' ? 'active' : '')} 
                onClick={() => setTheme('dark')}
                title="Alterar para tema escuro"
            >
                <Moon size={14} weight="fill" />
            </S.ButtonDark>
        </S.Container>
    );
}

export default ThemeToggler;