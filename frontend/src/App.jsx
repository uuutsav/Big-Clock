import { useEffect, useRef, useState } from 'react'
import Clock from './components/Clock'
import Header from './components/Header'
import styles from './App.module.css'

import _ from 'lodash'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'

let timeoutID = null;

function App() {
  const [isIdle, setIsIdle] = useState(false);
  const [modeClock, setModeClock] = useState(true);
  const [modeStopwatch, setModeStopwatch] = useState(false);
  const [modeTimer, setModeTimer] = useState(false);

  const refBody = useRef();

  useEffect(() => {
    console.log("Refreshed")
    setTimer();
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    }
  }, [])

  const setTimer = () => {
    timeoutID = setTimeout(() => {
      // console.log("idle set")
      setIsIdle(true);
    }, 5000);
  }

  // debouncing the reset call, as it'll be called hell lot of times becasue of 'mousemove'
  const resetTimer = _.debounce(() => {
    console.log("reset")
    setIsIdle(false);

    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    setTimer();
  }, 100)

  return (
    <div ref={refBody}>
      <div className={styles.main}>
        <Header isIdle={isIdle} refBody={refBody} setModeClock={setModeClock} setModeStopwatch={setModeStopwatch} setModeTimer={setModeTimer}></Header>
        {modeClock && <Clock /> }
        {modeStopwatch && <Stopwatch />}
        {modeTimer && <Timer />}
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}

export default App
