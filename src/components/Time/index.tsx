import React from 'react';

import * as S from './style';

interface TimeProps {
    time: number
}

const Time: React.FC<TimeProps> = ( { time } ) => {

    let seconds = `${time % 60}`.slice(-2).padStart(2, '0');
    let minutes = `${(Math.floor(time / 60)) % 60}`.slice(-2).padStart(2, '0');
    let hours = `${Math.floor(time / 3600)}`.slice(-2).padStart(2, '0');

    return (
        <S.Container>
            <S.Time>{hours}</S.Time>
            <S.Separator>:</S.Separator>
            <S.Time>{minutes}</S.Time>
            <S.Separator>:</S.Separator>
            <S.Time>{seconds}</S.Time>
        </S.Container>
    );
}

export default Time;