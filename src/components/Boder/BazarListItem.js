import React, { Component } from 'react'
import axios from 'axios'; 
import { Redirect } from 'react-router';

import { connect } from 'react-redux'
import { bazarBookReq } from '../../services/actions/BoderAction'

 class BazarListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            noMsg : ''
        }
    }

    BazarBook( date, boder ){
        const data = {
            date : date,
            boder : boder,
            local : JSON.parse(localStorage.getItem('user')).id
        }

this.props.bazarBookReq( data )

        // axios.put('http://127.0.0.1:8000/api/bazar_book_req/', data ).then(res => {
        //     // this.setState({
        //     //     redirect : res.data.status,
        //     //     noMsg : res.data.msg
        //     // })

        //     // alert( this.state.noMsg )

        //     console.log( res )

        // });

    }

    render() {
        
        const { redirect } = this.state;
		if (redirect) {
			return < Redirect to='/bazar-list'  />
        } 
        
        return (
            <tr key={ this.props.obj.id }>
                <td>{ this.props.obj.date }</td>
                <td>{ this.props.obj.boder1 == null ? <button onClick={ () => this.BazarBook( this.props.obj.date , 'boder1' )  } > Book { this.state.noMsg } </button> : this.props.obj.boder1 } </td>
                <td>{ this.props.obj.boder2 == null ? <button onClick={  () => this.BazarBook( this.props.obj.date , 'boder2' )  } > Book { this.state.noMsg } </button> : this.props.obj.boder2 }  </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loader: state.boder.loading,
        sucMsg: state.boder.sucMsg,
        bazarList: state.boder.bazarList
    }
}

const mapDispatchToProps = dispatch => ({
    bazarBookReq: data => dispatch(bazarBookReq(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(BazarListItem)
