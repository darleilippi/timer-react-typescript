import { Pause, Play, Stop } from 'phosphor-react';
import useTimer from '../../hooks/useTimer';
import Midea from '../Midea';
import Time from '../Time';
import * as S from './style';

const Timer = () => {
    const { timer, isActive, isPaused, handleStart, handlePause, handleStop } = useTimer();
    
    return (
        <>
            <S.Container>
                <S.Title>TIMER JS</S.Title>

                <Time time={timer} />

                <S.ActionsBox>
                    <S.Button 
                        title="Iniciar"
                        onClick={handleStart}
                        disabled={(isActive && !isPaused)}
                    >
                        <Play size={24} weight="fill" />
                    </S.Button>

                    <S.Button 
                        title="Pausar"
                        onClick={handlePause}
                        disabled={(!isActive || isPaused)}
                    >
                        <Pause size={24} weight="fill" />
                    </S.Button>

                    <S.Button 
                        title="Parar"
                        onClick={handleStop}
                        disabled={(!isActive)}
                    >
                        <Stop size={24} weight="fill" />
                    </S.Button>
                </S.ActionsBox>

            </S.Container>

            <Midea />
        </>
    );
}

export default Timer;