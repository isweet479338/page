import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import ManHead from '../../Auth/ManHead';
import ManFoot from '../../Auth/ManFoot';
import { costList } from '../../../services/actions/BazarAction';


function CostList(props) {

    
    useEffect(() => {
        props.costList()
    }, [])


    return (
        <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Cost List By Month</h2>
                <Link className='btn btn-info'  to='/add-cost' >Add Cost</Link>
                <p> {props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

              
                <table className='table table-primary' >
            <thead>
                <tr>
                    <td>SL.</td>
                    <td>Couse</td>
                    <td>Amount </td>
                    <td>Desc</td>
                    <td>Date</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            
                
        { props.cost.map( (obj , i) => {
            return (
                <tr key={i+1} >
                    <td>{ i+1 } </td>
                    <td>{ obj.couse } </td>
                    <td>{ obj.amount } </td>
                    <td>{ obj.desc } </td>
                    <td>{ obj.d }- { obj.m }- { obj.y } </td>
                    <td>
                        <Link className='btn btn-info' to={`/edit-cost/`+ obj.id  }  >Edit</Link>
                        <Link className='btn btn-warning' to={`/delete-cost/`+ obj.id  }  >Delete</Link>
                       
                    </td>
                </tr>
            )
        } ) }


            </tbody>

        </table>



                </div><div className="card-footer"  >
                        <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                    </div>
                </div> </div>

            </div></div></div> </div></div>  <ManFoot /> </>
    );
}

const mapStateToProps = (state) => ({
    sucMsg : state.bazar.sucMsg,
    cost : state.bazar.costList,
   
})

const mapDispatchToProps = (dispatch) => ({
    costList : () => dispatch( costList() )
})

export default connect(mapStateToProps, mapDispatchToProps)(CostList);