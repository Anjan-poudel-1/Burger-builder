import React from 'react'
import Logo_image  from '../../Assets/Images/a.png'
import styles from './Logo.module.css'
function Logo() {
    return (
        <div className={styles.ImageHolder}>
          <img src={Logo_image} alt="burger-logo"/>  
        </div>
    )
}

export default Logo
