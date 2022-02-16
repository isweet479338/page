import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { inputedList } from '../../../services/actions/BazarAction';

class InputList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.props.inputedList()
    }

    render() {
        return (
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
                        return (<tr>
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
                                <Link className='btn btn-info' to={`/view-bazar/` + item.id } >View</Link>
                                { item.status === 'BazarComplete' &&
                                <Link className='btn btn-success' to={`/confirm-bazar/` + item.id } >Confirm</Link>
                                }
                             </td>

                        </tr>)
                    })}


                </tbody>

            </table>
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
    inputedList: () => dispatch(inputedList()),

})

export default connect(mapStateToProps, mapDispatchToProps)(InputList);