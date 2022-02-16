import React, { Component } from 'react';
import { connect } from 'react-redux'
import ManFoot from '../../Auth/ManFoot';
import ManHead from '../../Auth/ManHead';
import { bazarkari } from '../../../services/actions/BazarAction'
import { Link } from 'react-router-dom'
import List from './List'

class BazarkariList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        this.props.bazarkari()
    }

    GustMillListf(){
     
        return this.props.list.map( (object, i)  => { 
            return (
                <List  obj={object} key={i}  /> 
            );
            
        });
    }

    render() {
        return (
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2>
                    <Link className="btn btn-warning" to='/add-bazarkari' > Add Bazar Kari </Link>
                    <p> {this.props.sucMsg}</p></div>
                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        <table className='table' >
                            <thead>
                                <tr>
                                    <td>SL.</td>
                                    <td>Date</td>
                                    <td>BazarKari 1</td>
                                    <td>BazarKari 2</td>
                                    <td>Action</td>

                                </tr>
                            </thead>
                            <tbody>

                            { this.GustMillListf() }

                            </tbody>

                        </table>

                    </div> </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loader : state.bazar.loading, 
        errMsg : state.bazar.errMsg,
        sucMsg : state.bazar.sucMsg,
        list : state.bazar.list,
       
    }
}

const mapDispatchToProps = dispatch => ({
    bazarkari : () => dispatch( bazarkari()),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(BazarkariList);