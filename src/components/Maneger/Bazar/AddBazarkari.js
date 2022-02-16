import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ManFoot from '../../Auth/ManFoot';
import ManHead from '../../Auth/ManHead';
import { dateWiseBazarkari, changeBazarkari, bazarkariStore } from '../../../services/actions/BazarAction'
import { listFromMill } from '../../../services/actions/ManegerAction'

class AddBazarkari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : '',
            boder1 : '',
            boder2 : '',
        };
    }

    componentDidMount() {
        this.props.listFromMill()

    }


    DateList = () => {
        var options = []

        const date = new Date();

        var hours = date.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        const tomorrow = new Date(date)
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (ampm == 'PM') {
            var start = tomorrow.getDate();
            var last = new Date(tomorrow.getFullYear(), tomorrow.getMonth() + 1, 0).getDate();
        } else {
            var start = date.getDate();
            var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        }

        for (let index = start; index < last + 1; index++) {
            options.push(<option key={index} value={index}> Select {index} {index === date.getDate() && 'Today'} </option>)
        }
        return options;
    }


    onChangeDate = (e) => {
        this.setState({date : e.target.value })
        this.props.dateWiseBazarkari(e.target.value)
    }
    changeBazarkari = (e) => {
        this.setState({boder1 : e.target.value })
       this.props.changeBazarkari( e.target.value )
    }
    changeBazarkari2 = (e) => {
        this.setState({boder2 : e.target.value })
       this.props.changeBazarkari( e.target.value )
    }


    onSubmit= (e) =>  {
        e.preventDefault();
        const obj = {
            date : this.state.date,
            boder1: this.state.boder1,
            boder2: this.state.boder2,
        };
        this.props.bazarkariStore(obj);

        // return	<Redirect to='/bazarkari' />
        this.props.history.push('/bazarkari')
    }


    render() {
        return (
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2>

                    <p> {this.props.sucMsg} </p></div>
                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Boder</label>
                                <select onChange={this.onChangeDate} value={this.state.date} required='required' name="date" className='form-control' >
                                    <option value=''> Select Date </option>
                                    {this.DateList()}
                                </select>
                            </div>

                            <div className="row" >
                                {this.props.boder1 === null &&

                                    <div className="col-sm-6" >
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Bazar Kari 1</label>
                                            <select onChange={ this.changeBazarkari } name="date" className='form-control'>
                                                <option>Select A BazarKari 1</option>
                                                {this.props.millList.map((object, i) => <option key={object.id} value={object.id} > {object.name} </option>)}
                                            </select>
                                        </div>
                                    </div>
                                }{ (this.props.boder2 === null) &&
                                    <div className="col-sm-6" >
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Bazar Kari 2</label>
                                            <select onChange={ this.changeBazarkari2 } name="date" className='form-control'>
                                                <option> Select a BazarKari 2 </option>
                                                {this.props.millList.map((object, i) => <option key={object.id} value={object.id} > {object.name} </option>)}
                                            </select>
                                        </div>
                                    </div>
                                }
                            </div>

                            <button className='btn btn-secondary' type='submit' >Set Them</button>

                        </form>
                      
                        {this.props.date != null &&
                            <div> Your Selected date {this.props.date} ; bazarkari 1 {this.props.boder1} AND BazarKari 2 {this.props.boder2} </div>
                        }
                        { this.props.dayShow }

                    </div> </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loader: state.bazar.loading,
        errMsg: state.bazar.errMsg,
        sucMsg: state.bazar.sucMsg,
        millList: state.maneger.millList,

        date: state.bazar.date,
        boder1: state.bazar.boder1,
        boder2: state.bazar.boder2,
        dayShow: state.bazar.dayShow,
    }
}

const mapDispatchToProps = dispatch => ({
    listFromMill: () => dispatch(listFromMill()),
    dateWiseBazarkari: (data) => dispatch(dateWiseBazarkari(data)),
    changeBazarkari: (data) => dispatch(changeBazarkari(data)),
    bazarkariStore: (data) => dispatch(bazarkariStore(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(AddBazarkari)