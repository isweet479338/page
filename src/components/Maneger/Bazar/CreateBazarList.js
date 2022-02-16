import React, { Component } from 'react';
import { Link  } from 'react-router-dom'
import { connect } from 'react-redux';
import { myBazarDetails, rowAdd, rowRemove, saveBazarList } from '../../../services/actions/BazarAction';
import BazarRow from './BazarRow'
import ManFoot from '../../Auth/ManFoot';
import ManHead from '../../Auth/ManHead';

class CreateBazarList extends Component {

    constructor() {
        super();
        this.state = {
            names: [],
            numOfChild: 0,
            bazarItem: [],
            names: [],
            amounts: [],
            prices: [],
            tk: 0,



        }
    }
    componentDidMount() {
        this.props.myBazarDetails();

    }
    rawAdds = () => {
        this.props.rowAdd(this.props.row)
    }
    rawRemoves = () => {
        this.props.rowRemove(this.props.row)
        const pp = this.props.row - 1;
        if (pp > -1) {
            this.state.names.splice(pp, 1);
            this.state.amounts.splice(pp, 1);
            const koto = this.state.prices.splice(pp, 1);
            const tks = this.state.tk - koto;
            this.setState({ tk: tks })
        }
    }


    handelChangeAmount(e, i) {
        var amountss = this.state.amounts.slice();
        amountss[i] = e;
        this.setState({ amounts: amountss })
        for (let index = 0; index < amountss.length; index++) {
            if (amountss[index] === undefined) {
                amountss[index] = null
                this.setState({ amounts: amountss })
            }
        }
    }


    handelChangeName = (e, i) => {
        var namess = this.state.names;
        namess[i] = e;
        this.setState({ names: namess })

        for (let index = 0; index < namess.length; index++) {
            if (namess[index] === undefined) {
                namess[index] = null
                this.setState({ names: namess })
            }
        }
    }

    handelChangePrice = (e, i) => {
        //   console.log( e )
        var pricess = this.state.prices.slice();
        pricess[i] = e;
        this.setState({ prices: pricess })
        let tkk = 0;
        for (let index = 0; index < pricess.length; index++) {
            if (pricess[index] === undefined) {
                pricess[index] = 0
                this.setState({ prices: pricess })
            } else {
                tkk += parseInt(pricess[index])
                this.setState({ tk: tkk })
            }
        }
    }

    onSubmit= (e) => {
        e.preventDefault();
        
        const obj = {
            name : this.state.names,
            amount : this.state.amounts,
            price : this.state.prices,
            tergate : this.props.target,
            personal : this.props.millTotal.total,
            gust : this.props.guestTotal.total,
            appro : this.state.tk,
        };

        this.props.saveBazarList( obj )
    }



    render() {
        const children = []

        for (let i = 0; i < this.props.row; i += 1) {
            children.push(<BazarRow key={i} index={i}
                onChangeName={this.handelChangeName.bind(this)}
                onChangeAmount={this.handelChangeAmount.bind(this)}
                onChangePrice={this.handelChangePrice.bind(this)}
            />)
        }
        return (


            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Create Bazar List</h2>

                    <Link className='btn btn-primary'  to="/mill-count">Imput Mill</Link>

                    <h5>{this.props.arrDate}</h5>
                    <p> {this.props.sucMsg}</p></div>
                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >


                        

                        { this.props.bazarkariTotal !== null &&
                            <p>BazarKari 1 : {this.props.bazarkariTotal.boder1} and BazarKari 2 : {this.props.bazarkariTotal.boder2} </p>
                        }
                     

                        {
                            this.props.millTotal !== null &&
                            <div>

                                <h6>  Mill Amount (Persoanl + Gust)</h6>
                                <p key="a"> Morning: ({this.props.millTotal.morning} + 0 ) = {this.props.millTotal.morning}</p>
                                <p key="aa"> Noon: ({this.props.millTotal.noon} + {this.props.guestTotal.noon}) = {this.props.millTotal.noon + this.props.guestTotal.noon} </p>
                                <p key="aaa"> Night: ({this.props.millTotal.night} + {this.props.guestTotal.night}) = {this.props.millTotal.night + this.props.guestTotal.night} </p>
                                <p key="aaaa"> Total: ({this.props.millTotal.total} + {this.props.guestTotal.total}) = {this.props.millTotal.total + this.props.guestTotal.total} </p>
                                <p key="aaaaa"> Appromix Bazar Tk( {this.props.rate } tk mill) {(this.props.millTotal.total + this.props.guestTotal.total) * this.props.rate }</p>
                            </div>
                        }
                        {
                            this.props.form === true &&
                            <form onSubmit={this.onSubmit} >
                                {children}
                                <h5> Tk {this.state.tk} </h5>
                                <span className="btn btn-success" onClick={this.rawAdds} > Add A Row </span>
                                <span className="btn btn-success" onClick={this.rawRemoves} > Remove A Row </span>
                                <button type='submit' className="btn btn-primary">Request </button>
                            </form>
                        }



                    </div> </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>


        )
    }

}

const mapStateToProps = (state) => {
    return {
        loader: state.bazar.loading,
        errMsg: state.bazar.errMsg,
        sucMsg: state.bazar.sucMsg,
        arrDate: state.bazar.arrDate,

        bazarkariTotal: state.bazar.bazarkari,
        guestTotal: state.bazar.guestTotal,
        millTotal: state.bazar.millTotal,
        target: state.bazar.target,
        rate: state.bazar.rate,
        form: state.bazar.form,
        row: state.bazar.row,
    }
}

const mapDispatchToProps = dispatch => ({
    myBazarDetails: () => dispatch(myBazarDetails()),
    rowAdd: (data) => dispatch(rowAdd(data)),
    rowRemove: (data) => dispatch(rowRemove(data)),
    saveBazarList: (data) => dispatch( saveBazarList (data)),


})


export default connect(mapStateToProps, mapDispatchToProps)(CreateBazarList)