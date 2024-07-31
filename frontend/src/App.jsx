import { useRef, useState } from 'react'
import styles from './App.module.css'
import Clock from './components/Clock'
import Header from './components/Header'

function App() {
  const refBody = useRef();

  return (
    <div ref={refBody}>
      <div className={styles.main}>
        <Header refBody={refBody}></Header>
        <Clock></Clock>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}

export default App
