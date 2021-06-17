import React, { Component } from 'react'
import Aux from '../../hoc/Au'
import Burger from '../../Burger/Burger'
import BuildControls from '../../Burger/BUildcontrols/Buildcontrols'
import Modal from '../../components/UI/Modal'
import Ordersummary from '../../Burger/OrderSummary/Ordersummary'
import axios from '../../axios_database'
import Spinner from '../../components/UI/Spinner/Spinner'
import witherrorhandler from '../../hoc/withErrorHandler/withErrorhandler' 
import {connect} from 'react-redux'
import * as actiontype from '../../store/actions/actionTypes'
import * as IndexActions from '../../store/actions/indexaction'
import Checkout from '../../containers/checkout/Checkout'
import { Route } from 'react-router-dom'


 class BurgerBuilder extends Component {
   
    state={
        total_price:2,
        purchasable:false,
        purchase:false,
        loading:false
        
    }
      
 is_puchasable(ingredients) {

     
        let add_value = Object.values(ingredients).reduce((a,b)=>(a+b) ,0);
       return add_value>0;

    }
    

    addIngredients= (type)=>{
        
       let newIngredientsState = {...this.state.ingredients};
      let  no_of_item = this.state.ingredients[type];
      let  updated_no_of_item = no_of_item+1;
        newIngredientsState[type]=updated_no_of_item;
        this.setState({
           ingredients : newIngredientsState,
         //  total_price :this.state.total_price+base_price[type]
        })
        this.is_puchasable(newIngredientsState);

    }

    removeIngredients = type=>{
       let removedIngredients={...this.state.ingredients};
       let  no_of_item = this.state.ingredients[type];
       if(no_of_item <= 0){
           return null ;
       }
      let  decreased_data = no_of_item-1;
        removedIngredients[type]=decreased_data;
        this.setState({
            ingredients:removedIngredients
            ,
          //  total_price:this.state.total_price- base_price[type]
        })
        this.is_puchasable(removedIngredients);
    }

    orderedHandler = ()=>{
        this.setState({
            purchase:true
        })

    }
    back_drop_handler = ()=>{
        console.log("object is clicked.... backdrop")
        this.setState({
            purchase:false
        })

    }
    onSuccessHandler=()=>{

        let queryparams=[];
        for (let i in this.state.ingredients){
            queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));

        }
        queryparams.push('price=' + this.state.total_price);
        

        const querystring = queryparams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+querystring
        });


        

    }
    render() {
   
const disabledInfo ={...this.props.ing};
for (let key in disabledInfo){
    disabledInfo[key] = disabledInfo[key]<=0
}
let orderSummary = <Ordersummary ingredients = {this.props.ing} onSuccess={this.onSuccessHandler} onDanger={this.back_drop_handler} total ={this.props.total}/>

if(this.state.loading){

    orderSummary = <Spinner/>

}

        
        return (
           <Aux>
<Modal order={this.state.purchase} back={this.back_drop_handler}>
{orderSummary}
</Modal>
                   
             
               <Burger ingredients= {this.props.ing}  />
               <BuildControls add = {this.props.onAddIngredient} decrease = {this.props.onRemoveIngredient} 
               disabled = {disabledInfo} price={this.props.total} purchase = {this.is_puchasable(this.props.ing)}
               order={this.orderedHandler} />
              
           </Aux>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddIngredient: (ingredient)=>dispatch(IndexActions.addIngredients(ingredient)),
        onRemoveIngredient: (ingredient)=>dispatch(IndexActions.removeIngredients(ingredient)),
        price_changer:()=> dispatch(IndexActions.changePrice)
    };
}
const mapStateToProps = state => {
console.log(state)
    return{
        ing:state.ingredients,
        price:state.total_price,
        base_price:state.base_price,
        total:state.total_price
    };
}


export default  connect(mapStateToProps,mapDispatchToProps)(witherrorhandler(BurgerBuilder,axios))
