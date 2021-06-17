import React,{Component} from 'react'
import Modal from '../../components/UI/Modal'
import Aux from '../Au'



const  withErrorhandler = (WrappedComponent,axios)=>{
    return class extends Component{
       state={
           err:null
       }
       errorConfirmedHAndler =()=>{
           this.setState({err:null})
       }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({err:null});
                return req;
            })
            axios.interceptors.response.use(res=>res,error=>{
this.setState({err:error})

            })
        }
       
        render(){
            return(
                <Aux>
    <Modal order={this.state.err}
    back={this.errorConfirmedHAndler}
    >
       {this.state.err? this.state.err.message:null}
    </Modal>
               
                <WrappedComponent{...this.props}/>
                </Aux>
            )
        }
    } 
}

export default withErrorhandler;