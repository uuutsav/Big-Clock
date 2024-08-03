import React, { useEffect, useRef, useState } from 'react'
import styles from './Stopwatch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [ms, setMs] = useState(0);

    const intervalID = useRef(null);

    const handleStart = () => {
        setIsRunning(true);
        intervalID.current = setInterval(() => {
            setMs(prevMs => prevMs + 1);
            console.log(ms);
        }, 10)
    }

    const handlePause = () => {
        setIsRunning(false);
        clearInterval(intervalID.current);
    }

    const handleStop = () => {
        setIsRunning(false);
        setMs(0);
        clearInterval(intervalID.current);
    }

    useEffect(() => {
        if (ms != 0) {
            setIsRunning(true)
        }
        return () => clearInterval(intervalID.current);
    }, [])

    return (
        <div className={styles.stopwatch}>
            <Display ms={ms % 100} sec={Math.floor(ms / 100)} min={Math.floor(ms / (100 * 60))} />
            <div className={styles.buttons}>
                {isRunning && <FontAwesomeIcon icon={faStop} className={styles.button} onClick={handleStop} />}
                {isRunning && <FontAwesomeIcon icon={faPause} className={styles.button} onClick={handlePause} />}
                {!isRunning && <FontAwesomeIcon icon={faPlay} className={styles.button} onClick={handleStart} />}
            </div>
        </div>
    )
}

function Display({ min, sec, ms }) {

    return (
        <>
            <p>
                <span className={styles.min} >
                    {min < 10 ? `0${min}` : min}
                </span>
                <span className={styles.s}>
                    :{sec < 10 ? `0${sec}` : sec}
                </span>
                <span className={styles.ms}>
                    .{ms < 10 ? `0${ms}` : ms}
                </span>
            </p>
        </>
    )
}

export default Stopwatch;
