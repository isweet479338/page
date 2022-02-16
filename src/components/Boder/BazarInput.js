import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BazarItem from './BazarItem'
import ExtraItem from './ExtraItem'
import Footer from '../Auth/Footer';
import Header from '../Auth/Header';
import { bazarBack2Maneger, boderBazarJoma } from '../../services/actions/BazarAction';

class BazarInput extends Component {

    constructor() {
        super();

        this.state = {
            names: [],
            amounts: [],
            prices: [],
            oldId : [],
            enames: [],
            eamounts: [],
            eprices: [],
            date: '',
            numChildren: 0,
            tk: 0,
            etk: 0,
            lateMsg: ''
        }

    }

    componentDidMount() {
        this.props.boderBazarJoma()
    }

    rawAdd = () => {
        this.setState({ numChildren: this.state.numChildren + 1 })

    }
    rawRemove = () => {
        this.setState({ numChildren: this.state.numChildren - 1 })
    }

    oldBazarItem() {
        return this.props.bazar_item.map((object, i) => {
            return (
                <BazarItem
                    obj={object}
                    key={i}
                    onChangeAmount={this.handelChangeAmount.bind(this)}
                    onChangePrice={this.handelChangePrice.bind(this)}
                    bal={i}
                />
            );

        });
    }

    handelChangeAmount(e, i) {
     
        var amountss = this.state.amounts.slice();
        amountss[i] = e;
        this.setState({ amounts: amountss })
        for (let index = 0; index < amountss.length; index++) {
            if (amountss[index] === undefined) {
                amountss[index] = 'Not Input'
                this.setState({ amounts: amountss })
            }
        }
    }


    handelChangePrice = (e, i, olde) => {

        var olds = this.state.oldId;
        var old = olds.slice();
        old[i] = olde

        var pricess = this.state.prices.slice();
        pricess[i] = e;

        this.setState({ prices: pricess })
        this.setState({ oldId : old })

        let tkk = 0;
        for (let index = 0; index < pricess.length; index++) {
            if (pricess[index] === undefined) {
                pricess[index] = 0
                this.setState({ prices: pricess })
            } else {
                tkk += parseInt(pricess[index])
                this.setState({ tk: tkk })
            }
            
            if( old[index] === undefined ){
                old[index] = 0
             }

        }
    }

    handelChangeEName = (e, i) => {
        var namess = this.state.enames;
        namess[i] = e;
        this.setState({ enames: namess })

        for (let index = 0; index < namess.length; index++) {
            if (namess[index] === undefined) {
                namess[index] = '(One Item)'
                this.setState({ enames: namess })
            }
        }
    }

    handelChangeEAmount(e, i) {
        var amountss = this.state.eamounts.slice();
        amountss[i] = e;
        this.setState({ eamounts: amountss })
        for (let index = 0; index < amountss.length; index++) {
            if (amountss[index] === undefined) {
                amountss[index] = "(Not Input Amount)"
                this.setState({ eamounts: amountss })
            }
        }
    }

    handelChangeEPrice = (e, i) => {
        var pricess = this.state.eprices.slice();
        pricess[i] = e;
        this.setState({ eprices: pricess })
        let tkk = 0;
        for (let index = 0; index < pricess.length; index++) {
            if (pricess[index] === undefined) {
                pricess[index] = 0
                this.setState({ eprices: pricess })
            } else {
                tkk += parseInt(pricess[index])
                this.setState({ etk: tkk })
            }
        }
    }

    onSubmit= (e) => {
        e.preventDefault();

        const obj = {

            oldId : this.state.oldId,
            amount : this.state.amounts,
            price : this.state.prices,
           
            ename : this.state.enames,
            eprice : this.state.eprices,
            eamount : this.state.eamounts,

            bazarListId : this.props.list.id,
            extraTk : this.state.etk,
            bazarAmt : this.state.tk + this.state.etk,

             
        };
        this.props.bazarBack2Maneger( obj )
        // console.log( obj )
    }

    render() {
        const children = []

        for (let i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ExtraItem key={i}
                onChangeName={this.handelChangeEName.bind(this)}
                onChangeAmount={this.handelChangeEAmount.bind(this)}
                onChangePrice={this.handelChangeEPrice.bind(this)}
                nameV={this.state.names[i]}
                bal={i} num={i + 1} />)
        }




        return (

            <><Header /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Bazar Input</h2>
                    <p> {this.props.sucMsg}</p>

                </div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        {this.props.form === true &&

                            <form onSubmit={this.onSubmit} >
                                {
                                    this.props.bazar !== null &&
                                    <p>BazarKari 1 : {this.props.bazar.boder1} and BazarKari 2 : {this.props.bazar.boder2} </p>
                                }
                                {
                                    this.props.bazarTk !== null &&
                                    <p>bazar Tk was {this.props.bazarTk.tk} </p>
                                }
                                {
                                    this.props.list !== null &&
                                    <p>Bazar for: Personal :- { this.props.list.personal }; Gust :- {this.props.list.gust}; And Appromex Price :- {this.props.list.appro} </p>
                                }


                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>SL.  </th>
                                            <th>Name(Q-P)</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.oldBazarItem()}
                                    </tbody>

                                </table>


                                <div style={{ 'background': '444' }} >
                                    <h2>Extra Item Add Here</h2>
                                    <hr />
                                    {children}
                                </div>

                                <span className="btn btn-success" onClick={this.rawAdd} > Add A Row </span>
                                <span className="btn btn-success" onClick={this.rawRemove} > Remove A Row </span>

                                <p>Bazar Tk: {this.state.tk} </p> <br />
                                <p>Extra Bazar Tk: {this.state.etk} </p> <br />
                                <p>Total Bazar Tk: {this.state.tk + this.state.etk} </p> <br />
                                <button className="btn btn-primary">Request </button>

                            </form>
                        }

                    </div><div className="card-footer"  >
                            <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                        </div> </div>
                    </div>
                </div></div></div> </div></div>
                <Footer />
            </>


        )
    }

}
const mapStateToProps = (state) => {
    return {
        loader: state.bazar.loading,
        errMsg: state.bazar.errMsg,
        sucMsg: state.bazar.sucMsg,
        form: state.bazar.form,

        bazar: state.bazar.bazar,
        list: state.bazar.bazar_list,
        bazarTk: state.bazar.bazar_tk,
        bazar_item: state.bazar.bazar_item,


    }
}
const mapDispatchToProps = dispatch => ({
    boderBazarJoma: () => dispatch(boderBazarJoma()),
    bazarBack2Maneger: (data) => dispatch( bazarBack2Maneger(data)),

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BazarInput));
