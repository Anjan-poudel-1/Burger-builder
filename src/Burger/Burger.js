import React from 'react'
import Ingredients from './BurgerIngredients/Ingredients'
import styles from './Burger.module.css'
function Burger(props) {

   

let transformedIngredients = Object.keys(props.ingredients)
.map(igkeys=>[...Array(props.ingredients[igkeys])] 
.map((_,i) => {
    return <Ingredients key={igkeys+i} type={igkeys}/>
})
).reduce((current,prev)=>{
return current.concat(prev);
},[]);

if(transformedIngredients.length===0){
    transformedIngredients=<p>Please start adding ingredients!</p>
}

    return (
        <div className={styles.Burger}>
            <Ingredients type='bread-top'/>
            {transformedIngredients}
            <Ingredients type='bread-bottom'/>
        </div>
    )
}

export default Burger
