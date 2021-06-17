import React from 'react'
import Button from '../../components/UI/Button/Button'
function Ordersummary(props) {

let obj=props.ingredients;

 let lists=Object.keys(obj).map(item=>{
    return(<li key={item}><span style={{textTransform:"capitalize"}}>{item}</span>  : {obj[item]} </li>)
} )

console.log(obj+"is the order")
    return (
        <div>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
{lists}
            </ul>
    <h2>Price: $ {props.total}</h2>
            <p>Continue to Checkout?</p>
            <Button t="Success" clicked={props.onSuccess}>
               Continue
             </Button> 
            <Button t="Danger" clicked={props.onDanger}>
            Cancel  </Button> 
        </div>
    )
}

export default Ordersummary
