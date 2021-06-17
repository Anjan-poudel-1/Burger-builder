import React from 'react'
import styles from './Backdrop.module.css'
function Backdrop(props) {
  
  let a= props.show_back? (<div className={styles.Backdrop} onClick={props.back}></div>):null;
    
   return a;
}

export default Backdrop
