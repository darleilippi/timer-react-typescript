import { useContext } from 'react';
import { Sun, Moon } from 'phosphor-react';
import { ThemeContext } from '../../contexts/ThemeContext';

import * as S from './style';

const ThemeToggler = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    const themeInverted = theme === 'light' ? 'dark' : 'light';

    return (
        <S.Container>
            <S.Button 
                className={(theme === 'light' ? 'active' : '')} 
                onClick={() => switchTheme(themeInverted)}
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