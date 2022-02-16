import React, { Component } from 'react';
import { connect } from 'react-redux'
import { listFromMill, guestMillSave, } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';


class GuestMillStart extends Component {

    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            boderId: '',
            date: '',
            noon: '',
            night: '',
        }
    }

    onChangeDate(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    componentDidMount() {
        this.props.listFromMill()
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            noon: this.state.noon,
            night: this.state.night,
            boderId: this.state.boderId,
        };
        this.props.guestMillSave(obj)
        this.setState({ boderId: '', noon: '', night: '', date: '' })
    }

    DateList = () => {
        var date = new Date()
        var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var options = []
        for (let index = date.getDate(); index < last + 1; index++) {
            options.push(<option value={index}> Select {index} {index === date.getDate() && 'Today'} </option>)
        }
        return options;
    }

    render() {



        return (

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >


                        <form onSubmit={this.onSubmit} >


                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Boder</label>

                                <select onChange={this.onChangeDate} value={this.state.boderId} name="boderId" className='form-control' >
                                    <option value=''>Select One</option>
                                    {this.props.millList.map((object, i) => <option key={object.id} value={object.id} > {object.name} </option>)}

                                </select>

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Boder</label>

                                <select onChange={this.onChangeDate} value={this.state.date} name="date" className='form-control' >
                                    <option value=''> Select Date </option>
                                    {this.DateList()}
                                </select>

                            </div>




                            <div className="row" >
                                <div className="col-sm-6" >
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Noon mill</label>
                                        <input
                                            type='text'
                                            className="form-control"
                                            name='noon'
                                            placeholder='Mill amount here'
                                            value={this.state.noon}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Night mill</label>
                                        <input
                                            type='text'
                                            className="form-control"
                                            name='night'
                                            placeholder='Mill amount here'
                                            value={this.state.night}
                                            onChange={this.onChangeDate}
                                        />
                                    </div>
                                </div>
                            </div>



                            <button className="btn btn-primary">Request </button>
                        </form>
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

        millList: state.maneger.millList
    }
}
const mapDispatchToProps = dispatch => ({
    listFromMill: () => dispatch(listFromMill()),
    guestMillSave: data => dispatch(guestMillSave(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(GuestMillStart);
