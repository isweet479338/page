import React, { Component } from 'react';
import  {Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { guestMillList,  } from '../../services/actions/ManegerAction'
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

 class GustMillList extends Component{

	constructor(){
		super();
		this.state = {
            list : [],
        }
    }

    componentDidMount() {
        // axios.get('http://127.0.0.1:8000/api/all_gust_mill_list/' + JSON.parse(localStorage.getItem('boder')).id).then(res => {
        //     this.setState({ list : res.data.bazar })
        // });
        this.props.guestMillList()
    }

	render(){
        let sumAmt = 0 ;
        let noon = 0 ;
        let night = 0 ;
        let now = new Date()
		return(

            
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
                <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                    <h2>Boder Request</h2><p> {this.props.sucMsg}</p></div>

                    <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                

                        <h3> All Gust Mill </h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th> No </th>
                                        <th> Name </th>
                                        <th> Date </th>
                                        <th> Amount </th>
                                        <th> Action </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                
                                { this.props.guestList.map( (object, i) =>  
                                
                                    <tr key={ i } >
                                        <th> { i+1 } </th>
                                        <th> { object.name }  </th>
                                        <th> { object.d }-{ object.m }-{ object.y } </th>
                                        <th> 
                                            Noon : { object.noon } <br />
                                            Night : { object.night  } 
                                            <span style={{ display : 'none' }} > { noon +=  object.noon  } { night +=  object.night  }</span>
                                        </th>

                                        <th>  

                                        { now.getDate() <= object.d &&
                                        <>
                                        <Link className="btn btn-info" to={ "/guest-mill-edit/"+ object.id } > Edit </Link>
                                        <Link className="btn btn-info" to={ "/guest-mill-delete/"+ object.id } > Delete </Link>
                                        </>
                                        }

                                        </th>
                        
                                    </tr>

                                    
                                )}
                                </tbody>
                            </table>

                            <h3> Total Noon : { noon } </h3>
                            <h3> Total Night : { night  } </h3>
                            <h3> Total : {  noon  +   night  } </h3>
                            </div><div className="card-footer"  >
                            <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                        </div>
                    </div> </div>
                </div></div></div> </div></div>  <ManFoot /> </>


		)
	}

} 
const mapStateToProps = (state) => {
    return {
        loader: state.maneger.loading,
        errMsg: state.maneger.errMsg,
        sucMsg: state.maneger.sucMsg,

        guestList : state.maneger.guestList
    }
}
const mapDispatchToProps = dispatch => ({
    guestMillList: () => dispatch(guestMillList()),
    // guestMillSave: data => dispatch(guestMillSave(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(GustMillList);
