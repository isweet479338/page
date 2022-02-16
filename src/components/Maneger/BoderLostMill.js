import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { listFromMill, singelMillStatus, resingelMillStatus, lostMillSave } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';
 class BoderLostMill extends Component {

    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeQuery = this.onChangeQuery.bind(this)
        this.onChangeReQuery = this.onChangeReQuery.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            boder: [],
            boderId: '',
            date: new Date().getDate(),
            mill: '',
            gust: '',
            noon: '',
            night: '',
            msg: ''
        }
    }

    onChangeDate(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onChangeQuery(e) {
        this.setState({ boderId: e.target.value })
        if (e.target.value !== '') {
            this.props.singelMillStatus( e.target.value, this.state.date )
        }
    }
    onChangeReQuery(e) {
        this.setState({ date: e.target.value })
        if (this.state.boderId !== '') {
            this.props.resingelMillStatus(this.state.boderId,  e.target.value )
        }
    }
    componentDidMount() {
        // axios.get('http://127.0.0.1:8000/api/boder_list_form_mill/' +2 ).then(res => {
        //     this.setState({
        //         boder: res.data.boder_list
        //     });
        // });
        this.props.listFromMill();
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            date: this.state.date,
            noon: this.state.noon,
            night: this.state.night,
            boderId: this.state.boderId,

        };

        // axios.post('http://127.0.0.1:8000/api/lost_mill_save', obj).then(res => {
        //     // this.setState({ msg : res.data.msg }) 
        //     console.log(res)
        // });

        if( this.state.noon === '' && this.state.night === '' ){
        alert( 'Noon And Night Are empty' )
        }else{
            this.props.lostMillSave( obj )
        }

    }

    render() {

        let today = new Date().getDate()
        let yestarday = today - 1


        return (

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        <form onSubmit={this.onSubmit} >

                            <div className="row" >
                                <div className="col-sm-6" >

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Select Boder</label>

                                        <select onChange={this.onChangeQuery} value={this.state.boderId} name="boderId" className='form-control' >
                                            <option value=''>Select One</option>
                                            {this.props.millList.map((object, i) => <option key={object.id} value={object.id} > {object.name} </option>)}
                                        </select>

                                    </div>
                                </div>
                                <div className="col-sm-6" >

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Select Date</label>

                                        <select required='required' onChange={this.onChangeReQuery} value={this.state.date} name="date" className='form-control' >
                                            <option value=''>Select One</option>
                                            <option value={today}>Today</option>
                                            <option value={yestarday}>Yestarday</option>

                                        </select>

                                    </div>
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-sm-6" >
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Noon mill</label>
                                        <input
                                            type='number'
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
                                            type='number'
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

                        <h3>Requested Boder Mill Details</h3>

                        <p> Personal Mill Details (Morning+Noon+Night): {this.props.mill}  </p>
                        <p> Gust Mill Details: Noon:- { this.props.noon !== '' && this.props.noon }, Night:-   { this.props.night !== '' && this.props.night } </p>

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

        millList: state.maneger.millList,
        mill: state.maneger.mill,
        noon: state.maneger.noon,
        night: state.maneger.night,
   
    }
}
const mapDispatchToProps = dispatch => ({
    listFromMill: ( data ) => dispatch( listFromMill( data ) ),
    lostMillSave: ( data ) => dispatch( lostMillSave( data ) ),
    singelMillStatus: ( id, date) => dispatch( singelMillStatus(id, date ) ),
    resingelMillStatus: ( id, date) => dispatch( resingelMillStatus(id, date ) ),
})
export default connect(mapStateToProps, mapDispatchToProps)(BoderLostMill);

