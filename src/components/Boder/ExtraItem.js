import React, { Component } from 'react';
 
export default class ExtraItem extends Component {

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
            this.props.onChangePrice( e.target.value, this.props.bal)
        }
        
    }
    
    render (){
       
    return(
        <div  key={ this.props.bal } >

        <div key={ this.props.bal } className="row" >
        <div  key={`name ${ this.props.bal }`} className='col-sm-4' >

            <div key={`namee ${ this.props.bal }`} className="form-group">
                <label htmlFor={`exampleFormControlSelect1  namee ${ this.props.bal }`} > { this.props.num } Item Name</label>
                <input  
                    type='text' 
                    className="form-control" 
                    name='name' 
                    onChange={ this.onFieldChangeName }
                    required="required"
                />
            </div>

        </div>
            
        <div  key={`amount ${ this.props.bal }`} className='col-sm-4' >

            <div key={`namea ${ this.props.bal }`} className="form-group">
                <label htmlFor={`exampleFormControlSelect1 namea ${ this.props.bal }`} >Buying Amount / Weight</label>
                <input  
                    type='text' 
                    className="form-control" 
                    name='amount' 
                    onChange={ this.onFieldChangeAmount }
                    required="required"
                />
            </div>

        </div>
        <div  key={`price ${ this.props.bal }`} className='col-sm-4' >

            <div key={`namep ${ this.props.bal }`} className="form-group">
                <label htmlFor={`exampleFormControlSelect1 namep ${ this.props.bal }`} >Buying Price</label>
                <input  
                    type='text' 
                    className="form-control" 
                    name='price' 
                    onChange={ this.onFieldChangePrice }
                    required="required"
                />
            </div>

        </div>
    </div>
    </div>


    )}
}
