import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dayDetails, tkDelete } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

class DayDetails extends Component {

    componentDidMount() {
        this.props.dayDetails(this.props.match.params.id);
    }


    render() {
        let sumAmt = 0;
        return (

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> No </th>
                                    <th> Name </th>
                                    <th> Amount </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.props.tkByDate.map((object, i) =>
                                    <tr key={i + 1}  >
                                        <td> {i + 1} </td>
                                        <td> {object.name} </td>
                                        <td> {object.amount} </td>
                                        <td>
                                            {/* <Link className="btn btn-info" to={ "/day-details/"+ object.id } >Edit</Link> */}
                                            {/* <Link className="btn btn-info" to={ "/persone-details/"+ object.id } >His Details</Link> */}

                                            {/* <button className="btn btn-danger"   > View Details</button> */}

                                            <button className="btn btn-danger" onClick={() => this.props.tkDelete(object.id)}  > Delete</button>
                                            <span style={{ display: 'none' }} > {sumAmt += parseInt(object.amount)}</span>
                                        </td>

                                    </tr>



                                )}
                            </tbody>
                        </table>

                        <h3> Total Joma Of this Day : {sumAmt} </h3>

                    </div><div className="card-footer"  >
                            <p>Here is all lost mill request. If you accept Thos boder mill kata jabe or not</p>
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

        tkByDate: state.maneger.tkByDate,

    }
}

const mapDispatchToProps = dispatch => ({
    dayDetails: (date) => dispatch(dayDetails(date)),
    tkDelete: data => dispatch(tkDelete(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(DayDetails);
