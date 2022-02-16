import React, { Component } from 'react';

export default class BazarRow extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bazarItem : [],
            names : [],
            amounts : [],
            prices : []
        }
    }

    nameChanege = (e) => {
        var namess = this.state.names;
        var i = this.props.index;

        namess[i] = e.target.value;
        this.setState({ names : namess })
          
        // for (let index = 0; index < namess.length; index++) {
        //   if (namess[index] === undefined ) {
        //        namess[index] = null
        //        this.setState({ names : namess })
        //   }
        // }


        console.log( this.state.names )
    }

    amountChange = (e) => {
        const amount = this.state.amounts;
        amount.push( e.target.value )
        this.setState({amounts : amount })
        // console.log( e.target.value, this.props.index )
    }

    priceChanege = (e) => {
        const price = this.state.prices;
        price.push( e.target.value )
        this.setState({prices : price })
        // console.log( e.target.value, this.props.index )
    }

    onFieldChangeName = (e) => {

        this.props.onChangeName(e.target.value, this.props.index)
    }
    onFieldChangeAmount = (e) => {
        this.props.onChangeAmount(e.target.value, this.props.index)
    }
    onFieldChangePrice = (e) => {
        if (isNaN(e.target.value)) {
            alert('Please Input an Number')
            this.props.onChangePrice(0, this.props.index)
        } else if (e.target.value === '') {
            this.props.onChangePrice(0, this.props.index)
        } else {
            this.props.onChangePrice(e.target.value, this.props.index)
        }

    }

    render() {

        return (
            <div key={ this.props.index } className='row' >

                <div key={`nameddsee ${ this.props.index }`} className='col-sm-4' >
                    <div  key={`namewe ${ this.props.index }`} className="form-group">
                        <label key={`nameeasdaw ${ this.props.index }`}  > Name Of Product </label>
                        <input  key={`namdsfdseea ${ this.props.index }`}
                            type='text'
                            className="form-control"
                            name='name'
                            placeholder="Name"
                            required='required'
                            onChange = { this.onFieldChangeName }
                        />
                    </div>
                </div>
                <div key={`nameallll ${ this.props.index }`} className='col-sm-4' >
                    <div key={`namea1 ${ this.props.index }`} className="form-group">
                        <label key={`name646e ${ this.props.index }`} > Amount Of Product </label>
                        <input key={`namefdfe ${ this.props.index }`}
                            type='text'
                            className="form-control"
                            name='amount'
                            placeholder="Amount"
                            required='required'
                            onChange = { this.onFieldChangeAmount }
                        />
                    </div>
                </div>
                <div key={`namersd ${ this.props.index }`} className='col-sm-4' >
                    <div key={`namerer ${ this.props.index }`} className="form-group">
                        <label key={`namsadsee ${ this.props.index }`} >  Amount Of Price </label>
                        <input key={`namesdadsae ${ this.props.index }`}
                            type='number'
                            className="form-control"
                            name='price'
                            placeholder="Price"
                            required='required'
                            onChange = { this.onFieldChangePrice }
                        />
                    </div>
                </div>

            </div>


        )
    }
}
