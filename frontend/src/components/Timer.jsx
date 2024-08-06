import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import styles from './Timer.module.css'

function Timer() {
  const [isRunning, setIsRunning] = useState(false)
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const secRef = useRef();
  const minRef = useRef();
  const hourRef = useRef();

  useEffect(() => {
    secRef.current.addEventListener('wheel', handleScrollSec)
    minRef.current.addEventListener('wheel', handleScrollMin)
    hourRef.current.addEventListener('wheel', handleScrollHour)

    return () => {
      if (secRef.current) {
        secRef.current.removeEventListener('wheel', handleScrollSec)
        secRef.current.removeEventListener('wheel', handleScrollMin)
        secRef.current.removeEventListener('wheel', handleScrollHour)
      }
    }
  }, [])

  const playpauseHandler = () => {

  }
  const stopHandler = () => {

  }
  const displayDigit = (row, val) => {
    let num = val + row;
    num = num > 59 ? row : num;
    num = num < 0 ? (60 + row) : num;
    num = num < 10 ? `0${num}` : num;
    // console.log(num)
    return num;
  }

  const handleScrollSec = (event) => {
    const delta = Math.sign(event.deltaY);
    setSec(prev => prev + delta);
  }
  const handleScrollMin = (event) => {
    const delta = Math.sign(event.deltaY);
    setMin(prev => prev + delta);
  }
  const handleScrollHour = (event) => {
    const delta = Math.sign(event.deltaY);
    setHour(prev => prev + delta);
  }


  return (
    <div className={styles.display}>
      <div className={styles.digits}>
        <div className={styles.one}>
          <span>{displayDigit(-2, hour)} </span>
          <span>{displayDigit(-2, min)} </span>
          <span>{displayDigit(-2, sec)} </span>
        </div>
        <div className={styles.two}>
          <span>{displayDigit(-1, hour)} </span>
          <span>{displayDigit(-1, min)} </span>
          <span>{displayDigit(-1, sec)} </span>
        </div>
        <div className={styles.three}>
          <span ref={hourRef}>{displayDigit(0, hour)}</span>
          <span ref={minRef}> {displayDigit(0, min)}</span>
          <span ref={secRef}> {displayDigit(0, sec)}</span>
        </div>
        <div className={styles.two}>
          <span>{displayDigit(1, hour)} </span>
          <span>{displayDigit(1, min)} </span>
          <span>{displayDigit(1, sec)} </span>
        </div>
        <div className={styles.one}>
          <span>{displayDigit(2, hour)} </span>
          <span>{displayDigit(2, min)} </span>
          <span>{displayDigit(2, sec)} </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <FontAwesomeIcon icon={faStop} className={styles.stop} onClick={stopHandler} />
        {!isRunning && <FontAwesomeIcon icon={faPlay} className={styles.playpause} onClick={playpauseHandler} />}
        {isRunning && <FontAwesomeIcon icon={faPause} className={styles.playpause} onClick={playpauseHandler} />}
      </div>
    </div>
  )
}

export default Timer;

/*
TODO : Main timer functionality if not implemented. Start stop pause.
TODO : Scroll won't work for going down to 00 and up above 60. 
*/
