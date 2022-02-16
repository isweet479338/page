import React, { Component } from 'react';
import { connect } from 'react-redux'
import { millCount, } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';
import MonthList from './List/MonthList'
import DayList from './List/DayList'

class MillCount extends Component {

    constructor() {
        super();
        this.state = {
            list: [],
            form : true
        }
    }

    componentDidMount() {
        this.props.millCount()
    }

    BoderList = () => {

        if (this.props.type === 'month') {
            return <MonthList data={ this.props.list } />
        }
        if (this.props.type === 'day') {
            return <DayList requ={ this.props.req } data={ this.props.list } />
        }

        if (this.props.type === 'new') {
           this.setState({ form : false })
        }
       
        
    }


    render() {
        return (


            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                        { this.state.form ? this.BoderList() : this.props.sucMsg }

                    </div> </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>


        )
    }

}
const mapStateToProps = (state) => {
    return {
        loader: state.maneger.loading,
        errMsg: state.maneger.errMsg,
        sucMsg: state.maneger.sucMsg,

        list: state.maneger.list,
        type: state.maneger.type,
        req: state.maneger.req,
        
    }
}
const mapDispatchToProps = dispatch => ({
    millCount: () => dispatch(millCount()),
})
export default connect(mapStateToProps, mapDispatchToProps)(MillCount);
