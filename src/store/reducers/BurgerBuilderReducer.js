import * as actiontype from '../actions/actionTypes' 


let initialState= {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    total_price:2,
     base_price :{
        bacon:1,
        meat:3,
        salad:2,
        cheese:1.5
    }
}

const reducer = (state = initialState,action)=>{

switch(action.type){

case actiontype.ADD_INGREDIENTS:
    return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredient]:state.ingredients[action.ingredient]+1
        },
        total_price:state.total_price+state.base_price[action.ingredient]
    }
    case actiontype.REMOVE_INGREDIENTS:
    return{
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredient]:state.ingredients[action.ingredient]-1
        },
        total_price:state.total_price-state.base_price[action.ingredient]
    }

}
return state;
    

}

export default reducer;