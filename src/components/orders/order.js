import React from 'react'
import styles from './order.module.css'
function order(props) {

    let arr=[]
    let to_print=null
    for(let key in props.ingredients ){
     
        arr.push(key + " (" + props.ingredients[key]+") ");
      
    }
   let y= arr.map(a=>{
    return <span style={{textTransform:"capitalize",
    display:"inline-block",
    margin: '0 8px',
    padding: '5px',
    border: '1px solid #ccc'}} key ={a}>{a}</span>
   })
   
  
        
  return(
        <div className={styles.Order}>
           <p>INGREDIENTS: {y} </p> 
    <p>PRICE: <strong>{ " $ "+props.price}</strong></p>
        </div>
    )
}

export default order
