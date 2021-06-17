import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './Contactdata.module.css'
import axios from '../../../axios_database'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/input/Input'
import { checkPropTypes } from 'prop-types'
import {connect} from 'react-redux'

export class Contactdata extends Component {
    state={
       orderform:{

        name:{
            elementtype:'input',
            elementconfig:{
                type:'text',
                placeholder:'Enter Your Name',
                value:''
            },
            validation:{
                required:true
            },
            valid:false
        },
        zipcode:{
            elementtype:'input',
            elementconfig:{
                type:'text',
                placeholder:'Enter the Zipcode',
                value:''
            },
            validation:{
                required:true
            },
            valid:false
        },
        country:{
            elementtype:'input',
            elementconfig:{
                type:'text',
                placeholder:'Enter Your Country',
                value:''
            },
            validation:{
                required:true
            },
            valid:false
        },
        email:{
            elementtype:'input',
            elementconfig:{
                type:'email',
                placeholder:'Enter Your E-mail',
                value:''
            },
            validation:{
                required:true
            },
            valid:false
        },
        deliverymethod:{
            elementtype:'select',
            elementconfig:{
                type:'select',
               options:[
                   {value:'cheapest',displayValue:'Cheapest'},
                   {value:'fastest', displayValue:'Fastest'}
               ],
                value:'Cheapest'
            }
        }


       }
        ,
        loading:false
    }
    orderHandler = (event)=>{
        let Formdata = {};
        for(let data in this.state.orderform ){
            Formdata[data]=this.state.orderform[data].elementconfig.value
        }
        
      
this.setState({
            loading:true
        })

        let data ={
            ingredients:this.props.ing,
            price:this.props.price,
            userData:Formdata
            
        }
        axios.post('/orders.json',data)
        .then( res=>
            {
            
                this.setState({
                    loading:false,
                    purchase:false
                })

                this.props.route_prop.history.push('/')
            })
            .catch(res=> this.setState({purchase:false}))
           ;
        event.preventDefault();
    }

    inputHandler = (event,id)=>{
        let updatedForm = {...this.state.orderform}
        let updatedFormnested = {...updatedForm[id]}
        updatedFormnested.elementconfig.value =event.target.value ;
        updatedForm[id]=updatedFormnested;
console.log(event.target.value)
        this.setState({
        orderform:updatedForm    
        })
        console.log( updatedForm[id]) 
       
      
    }
    
    

    render() {
       

        let order_array=[];
        for(let key in this.state.orderform){
            order_array.push({
                id:key,
                config:this.state.orderform[key]
            })
        }
  
let to_print=null

        to_print= order_array.map( o=>{
            
                return <Input elementconfig={o.config.elementconfig} key={o.id} value={o.config.elementconfig} 
                changed={(event)=>this.inputHandler(event,o.id)}/>
            
         
        })

        let form =(<form onSubmit={this.orderHandler} >

   {to_print}
               <Button t="Success" >Submit</Button>

               </form>);
        if(this.state.loading){
            form=(<Spinner/>)
        }

       
        return (
            <div className={styles.Form}>
                <h3>Enter your contact data</h3>
{form}
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

export default connect(mapStateToProps,null)(Contactdata)
