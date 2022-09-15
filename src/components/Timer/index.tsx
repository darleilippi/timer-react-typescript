import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Stop, GithubLogo, LinkedinLogo } from 'phosphor-react';
import * as S from './style';

const Timer = () => {
    const [timer, setTimer] = useState<Date>(new Date());
    const [isStopped, setStopped] = useState(true);
    const [isPaused, setPaused] = useState(false);
    
    const [timeInterval, setTimeInterval] = useState<ReturnType<typeof setInterval> | null>(null);

    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    useEffect(() => {
        
        if (!isStopped && !isPaused) {

        }

    }, [timer])

    const padTime = (number: Number) => {
        return String(number).padStart(2, '0');
    }

    const handleStartTimer = () => {
        console.log('start');
        const time = setInterval(() => handleTimerCount, 1000);
        setTimeInterval(time);

        setStopped(false);
        setPaused(false);
    }

    const handlePauseTimer = () => {
        setPaused(true);
    }

    const handlStopTimer = () => {
        setStopped(true);

        if (timeInterval)
            clearInterval(timeInterval);
    }

    const handleTimerCount = () => {
        console.log(timer);

        if (isPaused)
            return

        console.log(timer);
    }

    return (
        <>
            <S.Container>
                <S.Title>TIMER JS</S.Title>

                <S.TimeBox>
                    <S.Time>{ padTime(hours) }</S.Time>
                    <S.Separator>:</S.Separator>
                    <S.Time>{ padTime(minutes) }</S.Time>
                    <S.Separator>:</S.Separator>
                    <S.Time>{ padTime(seconds) }</S.Time>
                </S.TimeBox>

                <S.ActionsBox>
                    <S.Button 
                        title="Iniciar"
                        onClick={handleStartTimer}
                        disabled={(!isStopped && !isPaused)}
                    >
                        <Play size={24} weight="fill" />
                    </S.Button>

                    <S.Button 
                        title="Pausar"
                        onClick={handlePauseTimer}
                        disabled={(isStopped || isPaused)}
                    >
                        <Pause size={24} weight="fill" />
                    </S.Button>

                    <S.Button 
                        title="Parar"
                        onClick={handlStopTimer}
                        disabled={(isStopped)}
                    >
                        <Stop size={24} weight="fill" />
                    </S.Button>
                </S.ActionsBox>

            </S.Container>

            <S.Midea>
                <S.MideaLink href='https://github.com/darleilippi/timer-react-typescript' title='Visualizar Github' target="_blank">
                    <GithubLogo size={24} weight="fill" />
                </S.MideaLink>
                <S.MideaLink href='https://www.linkedin.com/in/darlei-andr%C3%A9-lippi-67b84ab3/' title='Visualizar Linkedin' target="_blank">
                    <LinkedinLogo size={24} weight="fill" />
                </S.MideaLink>
            </S.Midea>
        </>
    );
}

export default Timer;