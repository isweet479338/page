import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bazarTkHistory,  } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

import { Link } from 'react-router-dom';


class BazarTkHistory extends Component {

    componentDidMount() {
        this.props.bazarTkHistory()
    }



    render() {


        let sumAmt = 0;
        return (


            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >


                        {/* <h3> Tk Amount By date </h3> */}
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> No </th>
                                    <th> Name </th>
                                    <th> Amount </th>
                                    <th> Bazar Kari </th>
                                    <th> Bazer Date </th>
                                    <th> Tk Given time </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.props.tkHistory.map((object, i) =>
                                    <tr key={i + 1}  >
                                        <td> {i + 1} </td>
                                        <td> {object.bazarkari} </td>
                                        <td> {object.tk} </td>

                                        <td> Boder 1 {object.boder1} <br />  Boder 2 {object.boder2}</td>
                                        <td> {object.d} </td>
                                        <td> {new Date(object.datetime * 1000).toLocaleString()} </td>
                                        <td>
                                            <Link className="btn btn-info" to={"/edit-bazar-tk/" + object.id} >Edit</Link>

                                            <button className="btn btn-danger" onClick={() => this.HandelDelete(object.id, i)}  > Delete</button>
                                            <span style={{ display: 'none' }} > {sumAmt += parseInt(object.tk)}</span>
                                        </td>

                                    </tr>



                                )}
                            </tbody>
                        </table>

                        <h3> Total Joma Of this Day : {sumAmt} </h3>

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

        tkHistory: state.maneger.tkHistory
    }
}
const mapDispatchToProps = dispatch => ({
    bazarTkHistory: () => dispatch( bazarTkHistory() ),
    // bazarTkGive: data => dispatch( bazarTkGive(data) )
})
export default connect(mapStateToProps, mapDispatchToProps)(BazarTkHistory);
