import React from 'react'
import Hamburger from '../DrawerToggle/HamburgerMenu/Hamburger'
function DrawerToggle(props) {
    return (
        <div onClick={props.clicked}>
            <Hamburger/>
            <Hamburger/>
            <Hamburger/>
        </div>
    )
}

export default DrawerToggle
