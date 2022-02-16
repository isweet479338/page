import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../Auth/Footer';
import Header from '../Auth/Header';
import { TodayMillStatus, lostMIllRequest } from '../../services/actions/BoderAction'
import '../../style/loader.css';
import LostMillList from './LostMillList';


class LostMill extends  Component {
    constructor() {
        super();
     this.onChangemorning = this.onChangemorning.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            morning: false,
            noon: false,
            night: false,
            lost: [],
            msg: '',
            local: '',
            form: true,
            noonData: '',
            nightData: ''
        }
    }
    componentDidMount() {
        this.props.TodayMillStatus( JSON.stringify(localStorage.getItem('user').id ) )
    }
    onChangemorning(e) {
        const { name, checked, value, type } = e.target
        type === 'checkbox' ? this.setState({ [name]: checked, [name + 'Data']: true }) : this.setState({ [name]: value })


    }


    onSubmit(e) {
        e.preventDefault();

        const obj = {
            morning: this.state.morning,
            noon: this.state.noon,
            noonData: this.state.noonData,

            night: this.state.night,
            nightData: this.state.nightData,

            local: JSON.parse(localStorage.getItem('user')).id
        };

        this.props.lostMIllRequest(obj)

        // axios.post('http://127.0.0.1:8000/api/lost_mill_request', obj).then(res => {
        //     this.setState({
        //         msg: res.data.msg
        //     })
        // });

    }

    LostMillListf(lostMillList){
     
        return lostMillList.map( (object, i)  => { 
            return (
                <LostMillList  obj={object} key={i}  /> 
            );
            
        });
    }



        render(){
               
        if(this.props.loader == true){
            return <div className="loader"></div>;
        }


        return (
            <>
                <Header/>

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="p-5">
                            <div className="text-center">

                            <div className="card-header"  >
                            <h2>Lost Mill Request</h2>
                            <p> { this.props.sucMsg }</p>
                        </div>
{ this.props.status && 
                        <form onSubmit={this.onSubmit} >

<div className="form-group">
    <label className='btn btn-success' htmlFor='morning' style={{ display: 'inline-flex' }} >
        <input
            id='morning'
            type='checkbox'
            className="form-control"
            name='morning'

            onClick={this.onChangemorning}
            style={{ marginTop: '-5px' }}
        />Morning &nbsp; &nbsp; </label>
</div>

<div className="form-group">
    <label className='btn btn-warning' htmlFor='noon' style={{ display: 'inline-block' }} >
        <input
            id='noon'
            type='checkbox'
            className="form-control"
            name='noon'

            onClick={this.onChangemorning}
            style={{ marginTop: '-5px' }}
        />&nbsp; &nbsp;Noon &nbsp; &nbsp; <br />

        {this.state.noon === true &&
            <input
                name='noonData'
                style={{ marginTop: '0', width: 60, height: 30 }}
                type='text'

                value={this.state.noonData === true ? 1 : this.state.noonData}
                onChange={this.onChangemorning}
            />
        }

    </label>

</div>
<div className="form-group">
    <label className='btn btn-dark' htmlFor='night' style={{ display: 'inline-block' }} >
        <input
            id='night'
            type='checkbox'
            className="form-control"
            name='night'

            onClick={this.onChangemorning}
            style={{ marginTop: '-5px' }}
        />&nbsp; &nbsp; Night &nbsp; &nbsp; <br />

        {this.state.night === true &&
            <input
                style={{ marginTop: '0', width: 60, height: 30 }}
                type='text'
                value={this.state.nightData === true ? 1 : this.state.nightData}
                name="nightData"
                onChange={this.onChangemorning}
            />
        }

    </label>
</div>
<button className="btn btn-primary">Request To Lost Mill Back </button>
</form> }



<div>
<h3>Your Lost Mill List</h3>

    <table className='table'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Noon</th>
                <th>Night</th>
                <th>Status</th>
                
            </tr>
        </thead>
        <tbody>
            { this.LostMillListf(this.props.lostMillList) }
        </tbody>
    </table>

</div>


</div></div></div> </div></div></div>

        

                <Footer/>
            </>
            
        );
    
} }

const mapStateToProps = (state) => {
    return {
        loader : state.boder.loading, 
        errMsg : state.boder.errMsg,
        sucMsg : state.boder.sucMsg,
        
        lostMillList : state.boder.lostMill,
        status : state.boder.form,
    }
}

const mapDispatchToProps = dispatch => ({
    TodayMillStatus: data => dispatch( TodayMillStatus(data)),
    lostMIllRequest: data => dispatch( lostMIllRequest( data ) )
})


export default connect( mapStateToProps,  mapDispatchToProps )(LostMill);