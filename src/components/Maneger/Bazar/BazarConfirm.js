import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { inputByDate, gotBazar } from '../../../services/actions/BazarAction';
import ManFoot from '../../Auth/ManFoot';
import ManHead from '../../Auth/ManHead';
import BazarItem from './BazarItem'
import ExtraItem from './ExtraItem';

class BazarConfirm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.inputByDate(this.props.match.params.date)
    }

    render() {
        return (
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Input By Date</h2>

                    <p> {this.props.sucMsg} </p></div>
                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                        {this.props.form === true &&
                            <>
                                <div style={{ 'color': 'red' }} >
                                    {this.props.bazar !== null &&
                                        <p>BazarKari 1 : {this.props.bazar.boder1} and BazarKari 2 : {this.props.bazar.boder2} </p>
                                    }
                                </div>

                                {this.props.dbazar_list !== null &&
                                    <p>Persoanl : {this.props.dbazar_list.personal} And Guest : {this.props.dbazar_list.gust}; Max bazar Amount Was : {this.props.dbazar_list.appro}</p>
                                }
                                {this.props.dinput !== null &&
                                    <p>Target Amount : {this.props.dinput.target_amt} tk Bazar amount:  {this.props.dinput.bazar_amt} tk</p>
                                }
                                {this.props.dbazar_tk !== null &&
                                    <>
                                        <p>Bazar Tk Was given to {'boder1' === this.props.dbazar_tk.bazarkari ? this.props.bazar.boder1 : this.props.bazar.boder2},  Tk Given Amount : {this.props.dbazar_tk.tk} tk </p>

                                        <br />

                                        <p>Last Amount Amount Boder Have {this.props.dbazar_tk.tk - this.props.dinput.bazar_amt} tk </p>

                                    </>
                                }

                                <hr />
                                <h6>Bazar Item Below</h6>
                                <BazarItem item={this.props.dbazar_item} />
                                <hr />
                                <h6>Extra Bazar Item Below</h6>
                                <ExtraItem extra={this.props.dbazar_extra} />


                                By Clicking button below, you accept all waitng Lost mill are confirm.
                                If you want not, Please confirm or delete lost mill those are waiting.

                                <Link to='/lost-mill-confirm'> Lost Mill List </Link>

                                <hr />
                                <button onClick={() => this.props.gotBazar(this.props.match.params.date)} className='btn btn-info'>  I Got All Bazar </button>
                            </>
                        }
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
        form: state.bazar.form,

        dinput: state.bazar.dinput,
        bazar: state.bazar.dbazar,
        dbazar_list: state.bazar.dbazar_list,
        dbazar_tk: state.bazar.dbazar_tk,
        dbazar_item: state.bazar.dbazar_item,
        dbazar_extra: state.bazar.dbazar_extra,

    }
}

const mapDispatchToProps = dispatch => ({
    inputByDate: (id) => dispatch(inputByDate(id)),
    gotBazar: (id) => dispatch(gotBazar(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(BazarConfirm);