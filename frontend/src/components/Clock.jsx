import React, { useEffect, useRef, useState } from 'react'
import styles from './Clock.module.css'

function Clock() {
    const [hour, setHour] = useState('-1');
    const [min, setMin] = useState('-1');
    const [sec, setSec] = useState('-1');
    const [refreshTime, setRefreshTime] = useState(1000);

    const minuteRef = useRef();
    const secondRef = useRef();

    const setTime = () => {
        const currentTime = new Date();
        setHour(currentTime.getHours());
        setMin(currentTime.getMinutes());
        setSec(currentTime.getSeconds());
    }
    
    useEffect(() => {

        setTime();
        setInterval(() => {
            setTime();
            console.log(`refreshed $(refreshTime)`);
        }, refreshTime)
    }, [])

    const handleHourClick = () => {
        console.log("click")
        minuteRef.current.style.display = 'inline-block';
        secondRef.current.style.display = 'inline-block';
        setRefreshTime(1000)
    }

    const handleMinuteClick = () => {
        console.log("min")
        minuteRef.current.style.display = 'none';
        setRefreshTime(60*60*1000)
    }

    const handleSecondClick = () => {
        console.log("sec")
        secondRef.current.style.display = 'none';
        setRefreshTime(60*1000); 
    }

    return (
        <div className={styles.clock}>
            <p>
                <span className={styles.hour} onClick={handleHourClick}>
                    {hour < 10 ? `0${hour}` : hour}
                </span>
                <span className={styles.minute} ref={minuteRef} onClick={handleMinuteClick}>
                    :{min < 10 ? `0${min}` : min}
                </span>
                <span className={styles.second} ref={secondRef} onClick={handleSecondClick}>
                    :{sec < 10 ? `0${sec}` : sec}
                </span>
            </p>
        </div>
    )
}

export default Clock;
