import { useEffect, useRef, useState } from "react"

type UseTimerProps = {
    hours: number;
    minutes: number;
    seconds: number;
    started: boolean;
    setStarted: (value: boolean) => void;
}

const useTimer = ({ hours, minutes, seconds, started, setStarted }: UseTimerProps) => {
    
    const totalSeconds = Number(seconds) + Number(minutes*60) + Number(hours*3600)
    const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);

    console.log('started', started);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(!started) return;
        console.log("above setSecondsLeft")

        setSecondsLeft(totalSeconds)


        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        
        intervalRef.current = setInterval(()=> {
            console.log("setInterval")
            setSecondsLeft((prev) => {
                if (prev === 1) {
                    clearInterval(intervalRef.current)
                    setStarted(false);
                    return 0;
                }
                return prev-1;
            })
        },1000);
        
        return () => clearInterval(intervalRef.current)

    },[ started])

    return { secondsLeft }
};

export default useTimer;