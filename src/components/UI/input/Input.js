import React from 'react'
import styles from './Input.module.css'
function Input(props) {
    let inputelement=null;
    switch(props.elementconfig.type){
        case( 'input'):
        
        inputelement=(<input {...props.elementconfig} className={styles.InputElement} value={props.value} onChange={props.changed}/>);
        break;
        case('textarea'):
        inputelement=(<input {...props.elementconfig} className={styles.InputElement} value={props.value} onChange={props.changed}/>)
        break;
        case('select'):

        inputelement=(<select className={styles.InputElement}  onChange={props.changed} >
           {props.elementconfig.options.map( opt=>{

               return <option value={opt.value} key={opt.displayValue} onChange={props.changed}>{opt.displayValue} </option>
           })}
        </select>)
        break;
        default:
            inputelement=(<input {...props.elementconfig}  className={styles.InputElement} onChange={props.changed}/>);
            break;
    }
    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputelement}
            
        </div>
    )
}

export default Input
