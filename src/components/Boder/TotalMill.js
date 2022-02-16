import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'; 

import { myMillSummary } from '../../services/actions/BoderAction'

import TotalMillList from './TotalMillList';
import Header from '../Auth/Header';
import Footer from '../Auth/Footer';

// import RequestList from './RequestList';

 class TotalMill extends Component{

	constructor(props){
        super(props);
      
		this.state = {
           days : [],
           mill : '',
           value : [],
           gusts : [],
           losts : [],
           total : ''
        }
    }

    componentDidMount(){
        this.props.myMillSummary( JSON.parse(localStorage.getItem('user')).id )
    }
    
    BodertList(){
        // const { days, value, gusts, losts } = this.state
        const value = this.props.value;
        const gusts = this.props.gusts;
        const losts = this.props.losts;

    return this.props.days.map(  (object, i)  => { 
            return (
                <TotalMillList  obj={object} key={i} val={ value[i] } gust={ gusts[i] } lost={ losts[i]  } index={ i+1 } /> 
            );
            
        });
    }


	render(){
        
        if(this.props.loader == true){
            return <div className="loader"></div>;
        }

     let now = new Date()
        
		return(
            <>
            <Header /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"><div className="p-5"> <div className="text-center"> <div className="card-header"  >
            <h2>My Total Mill Summary</h2><p> { this.props.sucMsg }</p>
                        </div>


				<div className="">

             

                    <div className='row' >
                        <div className='col-md-2' >



                        </div>
                        <div className='col-md-8 text-center'  >

                        <div className="card" >
                         <div className="card-header"  >
                            <p>Your Total Mill For This Month ( { now.toLocaleString('default', { month: 'long' } ) } - { now.getFullYear() } ) </p>
                        </div>

                        <div className="card-body"  >

                            <table className='table' >
                                <thead>
                                  <tr>
                                    <td>No</td>
                                    <td>Date</td>
                                    <td>Personal</td>
                                    <td>Gust</td>
                                    <td>Lost Mill</td>
                                    </tr>
                                </thead>
                                <tbody>
                            {/* { console.log( this.state.gusts ) } */}
                               { this.BodertList() }
                                
                               {/* <TotalMillList mills={ this.state.mill } /> */}

                                </tbody>
                            </table>


                            <p>Your Personal Mill { this.props.TotalMill.total_mill }, <br/> + Gust mill {this.props.TotalMill.total_gust}, <br/> - lost mill { this.props.TotalMill.total_lost }, <br/> = Last Total : { this.props.TotalMill.last } </p>


                        </div>


                        <div className="card-footer"  >
                            <p>We Include Gust mill with personal mill but deduct Lost mill </p>
                        </div>

                        </div>
                        <div className='col-md-2' >

                        </div>
                    </div>
                        
                    </div>

				</div>

           </div></div></div> </div></div></div>  <Footer/> </>
			)
	}

} 

const mapStateToProps = (state) => {
    return {
        loader : state.boder.loading, 
        errMsg : state.boder.errMsg,
        sucMsg : state.boder.sucMsg,
       


        days : state.boder.days,
        value : state.boder.value,
        gusts : state.boder.gusts,
        losts : state.boder.losts,
        TotalMill : state.boder.TotalMill


       
    }
}

const mapDispatchToProps = dispatch => ({
    myMillSummary: data => dispatch( myMillSummary(data)),
  
})


export default connect(mapStateToProps, mapDispatchToProps)(TotalMill)