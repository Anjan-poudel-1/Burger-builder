import React from 'react'
import styles from './Build_control.module.css'
function Build_control(props) {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.decrease} disabled={props.disable}>Less</button>
            <button className={styles.More} onClick={props.add}>More</button>
        </div>
    )
}

export default Build_control
