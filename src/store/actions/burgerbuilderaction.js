import * as actiontype from './actionTypes'


export const addIngredients = (ingredient)=>{

    return{type:actiontype.ADD_INGREDIENTS,ingredient:ingredient}
}
export const removeIngredients = (ingredient)=>{
    return{
        type:actiontype.REMOVE_INGREDIENTS,ingredient:ingredient
    }
    }

    export const changePrice = ()=>{
        return{type:actiontype.PRICE_CHANGER}
    }