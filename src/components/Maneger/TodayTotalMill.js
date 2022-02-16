import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import { Redirect } from 'react-router';

import TTMill from './TTMill';
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

export default class TodayTotalMill extends Component{

	constructor(props){
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
		this.state = {
           boder : [],
           redirect : false,
           date : ''
        }
       
    }

    onChangeDate(e){
        axios.get('http://127.0.0.1:8000/api/day_mill_list/'+ e.target.value ).then(res => {
            //  this.setState({ boder: res.data.requ_list });
            console.log(res)
        });

    }

    BodertList(){
		return this.state.boder.map(function(object, i){
			return <TTMill obj={object} key={i} />
		});

	}

    // componentDidMount(){
    //     axios.get('http://127.0.0.1:8000/api/add_request/'+ JSON.parse( localStorage.getItem('boder')).id ).then(res => {
    //         this.setState({ boder: res.data.requ_list });
    //     });
    // }

	render(){
        
     
        
		return(

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Today Total Mill</h2><p> {this.props.sucMsg}</p></div>

               <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Mase Code</label>
                 
                                <select  onChange={this.onChangeDate} name="date" className='form-control' >
                                    <option value='01'>Date 01</option>
                                    <option value='02'>Date 02</option>
                                    <option value='03'>Date 03</option>
                                    <option value='04'>Date 04</option>
                                    <option value='05'>Date 05</option>
                                    <option value='06'>Date 06</option>
                                    <option value='07'>Date 07</option>
                                    <option value='20'>Date 20</option>
                                </select>

                            </div>
                            <button className="btn btn-primary">Request </button>
                            </form>




                            <table className='table' >
                                <thead>
                                  <tr>
                                    <td>No</td>
                                    <td>Name</td>
                                    <td>Amount</td>
                                    </tr>
                                </thead>
                                <tbody>
                                { this.BodertList() }
                                 
                                </tbody>
                            </table>
                   
                            </div><div className="card-footer"  >
                            <p>Total Mill List</p>
                        </div>


                    </div> </div>

                </div></div></div> </div></div>  <ManFoot /> </>


			)
	}

} 