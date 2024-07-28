import { useState } from 'react'
import styles from './App.module.css'
import Clock from './components/Clock'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className={styles.main}>
        <Header></Header>
        <Clock></Clock>
      </div>
      <div className={styles.footer}>

      </div>
    </>
  )
}

export default App
