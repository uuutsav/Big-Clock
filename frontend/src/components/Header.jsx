import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExpand, faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <h3>Big Clock</h3>
                </div>
                <div className={styles.options}>
                    <FontAwesomeIcon icon={faExpand} className={styles.iconExpand} />
                    <FontAwesomeIcon icon={faUser} className={styles.iconUser} />

                </div>
            </nav>

        </div>
    )
}

export default Header
