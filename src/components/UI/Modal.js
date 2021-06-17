import React from 'react'
import styles from './Modal.module.css'
import Aux from '../../hoc/Au'
import Backdrop from './Backdrop/Backdrop'
function Modal(props) {
 
        return (
<Aux>
<Backdrop  show_back={props.order} back={props.back}/>
<div className={styles.Modal}
            style={{
                transform:props.order? 'translateY(0)' : 'translateY(-100vh)',
                opacity:props.order? '1':'0'
            }}
            >
                {props.children}
            </div>
</Aux>
           
        )
    
  
}

export default Modal
