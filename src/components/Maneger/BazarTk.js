import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listThisDay, bazarTkGive } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';


class BazarTk extends Component {

    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeCheck = this.onChangeCheck.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            boder: '',
            date: '',
            msg: '',
            data: '',
            boder1: false,
            boder2: false,
            boder1input: '',
            boder2input: ''
        }
    }

    onChangeDate(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.props.listThisDay(value)
    }

    onChangeCheck(e) {
        const { name, checked, value, type } = e.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            date: this.state.date,
            boder1: this.state.boder1,
            boder1input: this.state.boder1input,
            boder2: this.state.boder2,
            boder2input: this.state.boder2input,
        };

        this.props.bazarTkGive(obj)
    }

    DateList = () => {
        var date = new Date()
        var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var options = []
        for (let index = date.getDate(); index < last + 1; index++) {
            options.push(<option key={ index } value={index}> Select {index} {index === date.getDate() && 'Today'} </option>)
        }
        return options;
    }


    render() {
        return (


            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        <div className="card-body"  >
                            <br />
                            {this.state.data !== '' &&
                                <p> Inputed Day Bazar tk get by : {this.state.data.bazarkari}, tk amount {this.state.data.tk}  </p>
                            }

                            <form onSubmit={this.onSubmit} >

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Bazar Date Date</label>

                                    <select onChange={this.onChangeDate} value={this.state.date} name="date" className='form-control' >
                                        <option value=''>Select Date </option>
                                        {this.DateList()}
                                    </select>

                                </div>
                                {Object.keys(this.props.bazar).length > 0 ?
                                    <>
                                        {this.props.bazar.boder1 != null ?

                                            <div className="form-group">
                                                <label className='btn btn-success' htmlFor='night' style={{ display: 'inline-block' }} >
                                                    <input
                                                        id='night'
                                                        type='checkbox'
                                                        className="form-control"
                                                        name='boder1'
                                                        checked={this.state.boder1}
                                                        onChange={this.onChangeCheck}
                                                        style={{ marginTop: '-5px' }}
                                                    />&nbsp; &nbsp;  {this.props.bazar.boder1} &nbsp; &nbsp; <br />

                                                    {this.state.boder1 === true &&
                                                        <input
                                                            style={{ marginTop: '0', width: 60, height: 30 }}
                                                            type='text'
                                                            value={this.state.boder1input}
                                                            name="boder1input"
                                                            onChange={this.onChangeCheck}
                                                        />
                                                    }

                                                </label>
                                            </div>
                                            : 'NO One Booked for Bajarkari 1'}

                                        {this.props.bazar.boder2 != null ?
                                            <div className="form-group">
                                                <label className='btn btn-info' htmlFor='night' style={{ display: 'inline-block' }} >
                                                    <input
                                                        id='night'
                                                        type='checkbox'
                                                        className="form-control"
                                                        name='boder2'
                                                        checked={this.state.boder2}
                                                        onChange={this.onChangeCheck}
                                                        style={{ marginTop: '-5px' }}
                                                    />&nbsp; &nbsp;  {this.props.bazar.boder2}  &nbsp; &nbsp; <br />

                                                    {this.state.boder2 === true &&
                                                        <input
                                                            style={{ marginTop: '0', width: 60, height: 30 }}
                                                            type='text'
                                                            value={this.state.boder2input}
                                                            name="boder2input"
                                                            onChange={this.onChangeCheck}
                                                        />
                                                    }

                                                </label>
                                            </div>
                                            : 'NO One Booked for Bajarkari 2'}
                                    </>
                                    :
                                    'Boder Not Selected for this Day, Please Book boder first'
                                }
                                <br />
                                <button className="btn btn-primary">Request </button>
                            </form>

                        </div>
                        {this.state.data !== '' &&
                            <p> Inputed Day Bazar tk get by : {this.state.data.bazarkari}, tk amount {this.state.data.tk}  </p>
                        }



                    </div><div className="card-footer"  >
                            <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                        </div>
                    </div> </div>

                </div></div></div> </div></div>  <ManFoot /> </>


        )
    }
}




const mapStateToProps = (state) => {
    return {
        loader: state.maneger.loading,
        errMsg: state.maneger.errMsg,
        sucMsg: state.maneger.sucMsg,

        bazar: state.maneger.bazar

    }
}

const mapDispatchToProps = dispatch => ({
    listThisDay: (date) => dispatch(listThisDay(date)),
    bazarTkGive: data => dispatch(bazarTkGive(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(BazarTk);
