import React, { Component } from 'react';
 
export default class BazarItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {}
    }

    onFieldChangeName = (e ) => {
       
        this.props.onChangeName( e.target.value, this.props.bal)
    }
    onFieldChangeAmount = (e ) => {
        this.props.onChangeAmount( e.target.value, this.props.bal)
    }
    onFieldChangePrice = (e ) => {
        if ( isNaN (e.target.value)) {
            alert('Please Input an Number')
            e.target.value = 0
            this.props.onChangePrice( e.target.value, this.props.bal)
        } else if (e.target.value === '') {
            this.props.onChangePrice( 0, this.props.bal)      
        } else {
            this.props.onChangePrice( e.target.value, this.props.bal, this.props.obj.id )
        }
        
    }
    
    render (){
       
    return(
      <tr>
            <td>1</td>
            <td>{ this.props.obj.name } ( wgt: { this.props.obj.qty }  -  tk: { this.props.obj.price } )</td>
            <td> <input 
                    type='text'    
                    placeholder='Qty'
                    name='amount' 
                    onChange={ this.onFieldChangeAmount }
                    required='required'
                     /> </td>
                     

            <td><input 
            type='text' 
            placeholder='Tk'
            name='amount' 
            onChange={ this.onFieldChangePrice }
            required='required'
             /></td>
      </tr>
    )}
}
