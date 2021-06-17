import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems'
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'
function Toolbar(props) {
    return (
        <header className={styles.Toolbar}>
<DrawerToggle clicked={props.drawerToggleClicked}/>
<div className={styles.Logo}>
<Logo/>
</div>
<nav className={styles.Desktoponly}>
<NavigationItems/>
</nav>



        </header>
      
    )
}

export default Toolbar
