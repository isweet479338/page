import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { } from '../../../services/actions/BazarAction'
import { Link } from 'react-router-dom'

class GustMillList extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }


    render() {



        return (

            <tr >
                <td> 1 </td>
                <td> {this.props.obj.date} </td>
                <td> {this.props.obj.boder1}  </td>
                <td> {this.props.obj.boder2}  </td>
                <td>
                    <Link className="btn btn-danger" to='/edit-bazarkari' >Edit BazarKari </Link>
                    <Link className="btn btn-danger" to='/delete-bazarkari' > Delete Bazar Kari </Link>
                </td>

            </tr>


        );
    }
}



const mapStateToProps = (state) => {
    return {
        redirect: state.boder.redirect
    }
}

const mapDispatchToProps = dispatch => ({
    // DeleteGustMill: data => dispatch( DeleteGustMill(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(GustMillList);
