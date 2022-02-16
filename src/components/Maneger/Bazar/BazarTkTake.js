import React, { Component } from 'react';
import { connect } from 'react-redux'
import { inputedList } from '../../../services/actions/BazarAction';
import ManFoot from '../../Auth/ManFoot';
import ManHead from '../../Auth/ManHead';
// import InputList from './InputList'
import {Link} from 'react-router-dom'

class BazarTkTake extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.inputedList()
    }

    render() {
        return (
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Took Bazar Form Boder</h2>

                    <p> {this.props.sucMsg} </p></div>
                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >


                        {/* <InputList /> */}

                        <table className='table' >
                            <thead>
                                <tr>
                                    <td>SL.</td>
                                    <td>Date</td>
                                    <td>BazarKari</td>
                                    <td>Personal</td>
                                    <td>Guest</td>
                                    <td>Lost</td>
                                    <td>Tergat Amt</td>
                                    <td>Bazar Amt</td>
                                    <td>Stage</td>

                                    <td>Action</td>

                                </tr>
                            </thead>
                            <tbody>

                                {this.props.input.map((item, index) => {
                                    return (<tr key={ index }>
                                        <td>{index + 1}</td>
                                        <td>{item.d}</td>
                                        <td>Personal</td>
                                        <td>{item.personal} </td>
                                        <td>{item.gust} </td>
                                        <td>{item.lost} </td>
                                        <td>{item.target_amt} </td>
                                        <td>{item.bazar_amt} </td>
                                        <td>{item.status} </td>
                                        <td>
                                            <Link className='btn btn-info' to={`/view-bazar/` + item.id} >View</Link>
                                            {item.status === 'BazarComplete' &&
                                                <Link className='btn btn-success' to={`/confirm-bazar/` + item.id} >Confirm</Link>
                                            }
                                        </td>

                                    </tr>)
                                })}


                            </tbody>

                        </table>




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
        input: state.bazar.input,
    }
}

const mapDispatchToProps = dispatch => ({
    inputedList: () => dispatch( inputedList()),


})


export default connect(mapStateToProps, mapDispatchToProps)(BazarTkTake)