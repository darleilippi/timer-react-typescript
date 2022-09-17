import React from 'react';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

import * as S from './style';

const Midea: React.FC = () => {
  return (
    <S.Midea>
        <S.MideaLink href='https://github.com/darleilippi/timer-react-typescript' title='Visualizar Github' target="_blank">
            <GithubLogo size={24} weight="fill" />
        </S.MideaLink>
        <S.MideaLink href='https://www.linkedin.com/in/darlei-andr%C3%A9-lippi-67b84ab3/' title='Visualizar Linkedin' target="_blank">
            <LinkedinLogo size={24} weight="fill" />
        </S.MideaLink>
    </S.Midea>
  );
}

export default Midea;