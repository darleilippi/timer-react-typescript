import { useState, useRef } from 'react';

const useTimer = (initialValue = 0) => {
    const [timer, setTimer] = useState(initialValue);

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const timerRef = useRef(null);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);

        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    }

    const handlePause = () => {
        clearInterval(timerRef.current);
        setIsPaused(true);
    }

    const handleStop = () => {
        clearInterval(timerRef.current);

        setIsActive(false);

        setTimer(0);
    }

    return { timer, isActive, isPaused, handleStart, handlePause, handleStop };
}

export default useTimer;