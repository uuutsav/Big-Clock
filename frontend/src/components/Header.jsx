import React, { useRef, useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExpand, faUser } from '@fortawesome/free-solid-svg-icons'

function Header({ refBody }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleExpand = () => {
        if (!isFullScreen) {
            // enter fullscreen
            if (refBody.current.requestFullscreen) {
                refBody.current.requestFullscreen();
            } else if (refBody.current.webkitRequestFullscreen) {
                refBody.current.webkitRequestFullscreen();// Apple
            } else if (refBody.current.msRequestFullscreen) {
                refBody.current.msRequestFullscreen(); //IE11
            } else {
                console.log("not hehe")
            }

            setIsFullScreen(true);
        } else {
            // exit fullscreen
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    }

    return (
        <div className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <h3>Big Clock</h3>
                </div>
                <div className={styles.options}>
                    <FontAwesomeIcon icon={faExpand} className={styles.iconExpand} onClick={handleExpand} />
                    <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
                </div>
            </nav>

        </div>
    )
}

export default Header
