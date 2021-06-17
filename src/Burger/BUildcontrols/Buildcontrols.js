import React from 'react'
import Build_control from './Buildcontrol/Build_control'
import styles from './BuildControls.module.css'


function Buildcontrols(props) {
    const controls=[
        {label:"Salad",type:"salad"},
        {label:"Cheese",type:"cheese"},
        {label:"Bacon",type:"bacon"},
        {label:"Meat",type:"meat"}
    ];
    
    return (
        
        <div className={styles.BuildControls}>
            <h2>Current Price: $ {props.price}</h2>
           {
               controls.map(ctrl=>
               <Build_control key={ctrl.label} label={ctrl.label} add={()=>props.add(ctrl.type)} decrease={()=>props.decrease(ctrl.type)} 
               disable = {props.disabled[ctrl.type]}/>)
           }
           <button className={styles.OrderButton} disabled={!props.purchase} onClick={props.order}>Order Now</button>
        </div>
    )
}

export default Buildcontrols
