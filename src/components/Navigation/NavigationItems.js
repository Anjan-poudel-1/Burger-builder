import React from 'react'
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'
import styles from './NavigationItems.module.css'
function NavigationItems() {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            
            <NavigationItem link="/myOrders" >My Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems
