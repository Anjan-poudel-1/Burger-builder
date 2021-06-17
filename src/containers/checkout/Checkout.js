import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/orders/checkoutSUmmary/CheckoutSummary'
import Button from '../../components/UI/Button/Button'
import styles from './checkout.module.css'
import Contactdata from '../../containers/checkout/contactdata/Contactdata'
import {connect} from 'react-redux'
export class Checkout extends Component {
    cancelled = ()=>{
        this.props.history.goBack();
    }
    success = ()=>{
        this.props.history.replace('/checkout/contactdata')
    }

    state = {
        ingredients:null,
        total_price:0
    }
    componentWillMount(){
let price=0;
        const query = new URLSearchParams(this.props.location.search);
        const ingredients={};
        for (let param of query.entries()){
if(param[0]=='price'){
price= + param[1]
}else{
    ingredients[param[0]] = + param[1];

}
           
        }

        this.setState({
            ingredients:ingredients,
total_price:price
        })

    }
    render() {
        console.log(this.props);
        
        return (
            <div className={styles.Checkout}>
                <CheckoutSummary ingredients={this.props.ing}/>
                <Button t="Success" clicked={this.success}>
               Continue
             </Button> 
             <Button t="Danger" clicked={this.cancelled}>
            Cancel 
            </Button> 

            <Route path= {this.props.match.url + "/contactdata"} render={()=> (<Contactdata ingredients={this.state.ingredients} price={this.props.price} route_prop= {this.props}/>)}/>
            </div>
        )
    }
}
const mapStateToProps = state=>{

    return{
        ing:state.ingredients,
        price:state.total_price
    }

}
export default connect(mapStateToProps,null) (Checkout)
