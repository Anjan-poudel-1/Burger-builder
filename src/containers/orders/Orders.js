import React, { Component } from 'react'
import Order from '../../components/orders/order'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../../src/axios_database'
import WithEroorHandler from '../../hoc/withErrorHandler/withErrorhandler'
export class Orders extends Component {

    
    state={
        orders:null,
        loading:true
   
    }

componentDidMount(){
    
    let datas=<Spinner/>
        datas=axios.get('/orders.json').then
        (res=>{
            let fetchedoreders=[]
            for (let key in res.data){
       
            
fetchedoreders.push({
    ...res.data[key],id:key
});

            }
            console.log(fetchedoreders)
            this.setState({loading:false,orders:fetchedoreders})
        }).catch( error=> {
            console.log(error)
            this.setState({loading:false})
        })
}
    render() {

        let dataOutput = <Spinner/> 

        dataOutput= this.state.loading?<Spinner/> :this.state.orders.map( order=> <Order key ={order.id} ingredients={order.ingredients} price={order.price}/>)

        return (
            <div>
               {dataOutput}
                
            </div>
        )
    }
}

export default WithEroorHandler( Orders,axios)
