import React from 'react'
import styles from './Button.module.css'
function Button(props) {
    return (
       <button className={[styles.Button,styles[props.t]].join(' ')} onClick={props.clicked}>
{props.children}
       </button>
    )
}

export default Button
