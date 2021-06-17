
import React, { Component } from 'react'
import Layout from './components/Layout/Layout' 
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder'
import Checkout from '../src/containers/checkout/Checkout'
import Orders from '../src/containers/orders/Orders'
import {Route,Switch} from 'react-router-dom'
export class App extends Component {
  
  render() {
    return (
      <div>
    <Layout>
      <Switch>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/myOrders" component={Orders}/>
      </Switch>
  
     
    </Layout>
      </div>
    )
  }
}

export default App;



