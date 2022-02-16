import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import Header from "../Auth/Header";
import Footer from "../Auth/Footer";
import { tkJomaHistory } from '../../services/actions/BoderAction';


function TkJomaHistory(props) {

    
    useEffect(() => {
        props.tkJomaHistory()
    }, [])


    return (
        <><Header /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Cost List By Month</h2>
           
                <p> {props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

              
                <table className='table table-primary' >
            <thead>
                <tr>
                    <td>SL.</td>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Time (mm/dd/yyyy)</td>
                
                </tr>
            </thead>
            <tbody>
            
            { props.tk.map( (obj , i) => {
                var pp = new Date(obj.datetime * 1000 );
               
            return (
                <tr key={i+1} >
                    <td>{ i+1 } </td>
                    <td>{ obj.date } </td>
                    <td>{ obj.amount } </td>
                    <td>{ pp.toLocaleString() } </td>
                   
                </tr>
            )
        } ) }
        


            </tbody>

        </table>



                </div><div className="card-footer"  >
                        <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                    </div>
                </div> </div>

            </div></div></div> </div></div>  <Footer /> </>
    );
}

const mapStateToProps = (state) => ({
    sucMsg : state.boder.sucMsg,
    tk : state.boder.tk,

   
})

const mapDispatchToProps = (dispatch) => ({
    tkJomaHistory : () => dispatch( tkJomaHistory () )
})

export default connect(mapStateToProps, mapDispatchToProps)(TkJomaHistory);