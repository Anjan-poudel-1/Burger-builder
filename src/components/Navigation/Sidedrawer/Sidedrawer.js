import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems'
import styles from './Sidedrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Au'
function Sidedrawer(props) {

    let attachedClasses = [styles.Sidedrawer, styles.Close]
    if(props.open){
attachedClasses=[styles.Sidedrawer ,styles.Open];

    }


    return (
<Aux>

<Backdrop show_back={props.open} back={props.closed}/>

        <div className={attachedClasses.join(' ')}>
         
         <div className={styles.Logo}>
         <Logo/>
             </div>  
           <nav>
           <NavigationItems/> 
           </nav>
          
        </div>
        </Aux>
    )
}

export default Sidedrawer
