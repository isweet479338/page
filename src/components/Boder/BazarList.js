import React, { Component } from 'react';
import { connect } from 'react-redux'
import BazarListItem from './BazarListItem'
import Header from '../Auth/Header';
import Footer from '../Auth/Footer';
import { bazarThisMonth } from '../../services/actions/BoderAction';


class BazarList extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            bazar: []

        }
    }

    componentDidMount() {
        this.props.bazarThisMonth(JSON.parse(localStorage.getItem('user')).id)
    }

    BazarListItem() {
        return this.props.bazarList.map((object, i) => {
            return (
                <BazarListItem obj={object} key={i} />
            );

        });
    }


    render() {
        if (this.props.loader == true) {
            return <div className="loader"></div>;
        }
        return (

            <>
                <Header /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                    <div className="col-lg-12"><div className="p-5"> <div className="text-center"> <div className="card-header"  >
                        <h2>Bazar List Of This Month</h2><p> {this.props.sucMsg}</p></div>



                        <div className="">

                            <div className='row' >
                                <div className='col-md-2' >

                                </div>
                                <div className='col-md-12 text-center'  >

                                    <div className="card" >


                                        <div className="card-body"  >

                                            {this.state.msg}


                                            <div>

                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Boder 1</th>
                                                            <th>Boder 2</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.BazarListItem()}

                                                        {/* { this.state.bazar.map( (object, i)  =>  <tr key={object.id}><td>{ object.date }</td><td>{ object.boder1 == null ? <button onClick={ () => this.BazarBook( object.date , 'boder1' )  } > Book </button> : object.boder1 } </td><td> { object.boder2 == null ? <button onClick={  () => this.BazarBook( object.date , 'boder2' )  } > Book </button> : object.boder2 }  </td></tr>  )} */}

                                                    </tbody>
                                                </table>

                                            </div>

                                        </div>

                                        <div className="card-footer"  >
                                            <p> Once you booked, you can't Change </p>
                                        </div>

                                    </div>
                                    <div className='col-md-2' >

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div></div></div> </div></div></div>  <Footer /> </>
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
    bazarThisMonth: data => dispatch(bazarThisMonth(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(BazarList)