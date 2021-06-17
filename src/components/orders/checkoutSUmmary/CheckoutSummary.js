import React, { Component } from 'react'
import Burger from '../../../Burger/Burger'
import {withRouter} from 'react-router-dom'
export class CheckoutSummary extends Component {
    
   
    
    render() {

    

        return (
           
            <div>
                <h1>HOPE OUR BURGER TASTES WELL</h1>
               <Burger  ingredients= {this.props.ingredients}/> 
            </div>
          
        )
    }
}

export default withRouter(CheckoutSummary) 
