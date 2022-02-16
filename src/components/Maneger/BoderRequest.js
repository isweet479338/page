import React, { Component } from 'react';
import { connect } from 'react-redux'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';
import axios from 'axios'; 

import RequestList from './RequestList';

import { boderRequest  } from '../../services/actions/ManegerAction'

 class BoderRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
       this.props.boderRequest()
    }

    BodertList(){
		return this.props.requestList.map(function(object, i){
			return <RequestList obj={object} key={i} />
		});

	}


    render() {
        return (

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className=""><div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        <table className='table' >
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Name</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

  { this.BodertList() }

                            </tbody>
                        </table>

                    </div><div className="card-footer"  >
                            <p>If you dont recognize you may cansel this request.</p>
                        </div>


                    </div> </div></div>
                </div></div></div> </div></div>  <ManFoot /> </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loader : state.maneger.loading, 
        requestList : state.maneger.requestList,
        sucMsg : state.maneger.sucMsg
    }
}

const mapDispatchToProps = dispatch => ({
    boderRequest: data => dispatch( boderRequest(data)),
   
})


export default  connect(mapStateToProps, mapDispatchToProps ) (BoderRequest);