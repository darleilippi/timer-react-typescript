import { Play, Pause, Stop } from 'phosphor-react';
import * as S from './style';

const Timer = () => {
    return (
        <S.Container>
            <S.Title>TIMER JS</S.Title>

            <S.TimeBox>
                <S.Time>00</S.Time>
                <S.Separator>:</S.Separator>
                <S.Time>00</S.Time>
                <S.Separator>:</S.Separator>
                <S.Time>00</S.Time>
            </S.TimeBox>

            <S.ActionsBox>
                <S.Button>
                    <Play size={24} weight="fill" />
                </S.Button>

                <S.Button>
                    <Pause size={24} weight="fill" />
                </S.Button>

                <S.Button>
                    <Stop size={24} weight="fill" />
                </S.Button>
            </S.ActionsBox>

            <S.Midea>
                <S.MideaLink></S.MideaLink>
                <S.MideaLink></S.MideaLink>
            </S.Midea>
        </S.Container>
    );
}

export default Timer;