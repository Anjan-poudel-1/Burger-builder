import React, { Component } from 'react'
import Aux from '../../hoc/Au'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
   state={
       showSide:false
   }
   
    sideDrawerClosedHandler = ()=>{
this.setState({
    showSide:false
})
   }
   sideDrawerTOggleHandler = (prevstate)=>{
       this.setState({showSide:!prevstate.showSide})
   }
   
    render(){
        return (
            <Aux>
          
    <Toolbar  drawerToggleClicked={this.sideDrawerTOggleHandler}/>
    <Sidedrawer 
    open = {this.state.showSide}
    closed={this.sideDrawerClosedHandler}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
            </Aux>
            
    
        )
    }
   
}

export default Layout
