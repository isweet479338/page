import React, { Component } from 'react';
import { connect } from 'react-redux'
 
import ConfirmList from './ConfirmList';
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';
import { lostMillList  } from '../../services/actions/ManegerAction'

 class LostMillConfirm extends Component{

	constructor(props){
        super(props);
      
		this.state = {
           boder : [],
           redirect : false
        }
    }
    BodertList(){
		return this.props.lostList.map(function(object, i){
			return <ConfirmList obj={object} key={i} />
		});
	}

    componentDidMount(){
        this.props.lostMillList();
    }

	render(){
		return(

            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

               <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                            <table className='table' >
                                <thead>
                                  <tr>
                                    <td>No</td>
                                    <td>Name Room</td>
                                    <td>Mill</td>
                                    <td>Date & Request Time </td>
                                    <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                { this.BodertList() }
                                 
                                </tbody>
                            </table>
                   
                        
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
        lostList : state.maneger.lostList,
        sucMsg : state.maneger.sucMsg
    }
}

const mapDispatchToProps = dispatch => ({
    lostMillList: () => dispatch( lostMillList()),
   
})


export default  connect(mapStateToProps, mapDispatchToProps ) (LostMillConfirm);