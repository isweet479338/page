import React, { Component } from 'react';
import  {Link } from 'react-router-dom';
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';
import { connect } from 'react-redux'
import { totalTkByDate } from '../../services/actions/ManegerAction'
 class TotalTk extends Component{

    componentDidMount() {
        this.props.totalTkByDate()
    }

	render(){
        let sumAmt = 0 ;
		return(

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Boder Request</h2><p> { this.props.sucMsg }</p></div>

               <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th> No </th>
                                            <th> Date </th>
                                            <th> Amount </th>
                                            <th> Action </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                    { this.props.tk.map( (object, i) =>  
                                   
                                        <tr key={ i } >
                                            <th> { i+1 } </th>
                                            <th> { object.date } </th>
                                            <th> { object.sum } <span style={{ display : 'none' }} > { sumAmt += parseInt( object.sum ) }</span> </th>
                                            <th>  <Link className="btn btn-info" to={ "/day-details/"+ object.date } >  View Details </Link></th>
                                         
                                         {/* this system or use js reduce methods */}
                           
                                        </tr>

                                       
                                    )}
                                    </tbody>
                                </table>

                                <h3> Total Joma : { sumAmt } </h3>

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
        loader : state.maneger.loading, 
        errMsg : state.maneger.errMsg,
        sucMsg : state.maneger.sucMsg,

        tk : state.maneger.tk,

    }
}

const mapDispatchToProps = dispatch => ({
    totalTkByDate : () => dispatch( totalTkByDate() ),
    // tkJomaReq : data => dispatch( tkJomaReq(data) )
    
})


export default  connect(mapStateToProps, mapDispatchToProps ) (TotalTk);