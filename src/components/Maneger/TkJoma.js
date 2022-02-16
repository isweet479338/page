import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import { listFromMill, tkJomaReq,  } from '../../services/actions/ManegerAction';
import { useForm } from "react-hook-form";
import ManFoot from '../Auth/ManFoot';
import ManHead from '../Auth/ManHead';

 function TkJoma (props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.tkJomaReq( data )

    useEffect(  () => {
         props.listFromMill()
    }, [])


		return(
            <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Boder Request</h2><p> { props.sucMsg }</p></div>

               <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >
                
           
               <form onSubmit={handleSubmit(onSubmit)} className="user">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Select Boder</label>
                
                            <select  {...register("boderId", { required: true })}   className='form-control' >
                                <option value=''>Select One</option>
                                {props.boder_list.map( (object, i) =>   <option key={ object.id } value={ object.id } > { object.name } </option>  )}
                        
                            </select>
                            {errors.boderId && <span>This field is required</span>}

                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Tk Amount</label>
                            <input  
                                type='number' 
                                className="form-control" 
                              
                                placeholder='tk amount here...'
                                {...register("tk", { required: true })} 
                            />
                             {errors.tk && <span>This field is required</span>}
                        </div>

                        <button className="btn btn-primary">Request </button>
                    </form>


            
               </div><div className="card-footer"  >
                            <p>Here is all lost mill request. If you accept Thos boder mill kata jabe or not</p>
                        </div>


                    </div> </div>

                </div></div></div> </div></div>  <ManFoot /> </>

		)
	}


const mapStateToProps = (state) => {
    return {
        loader : state.maneger.loading, 
        errMsg : state.maneger.errMsg,
        sucMsg : state.maneger.sucMsg,

        boder_list : state.maneger.millList,

    }
}

const mapDispatchToProps = dispatch => ({
    listFromMill : () => dispatch( listFromMill() ),
    tkJomaReq : data => dispatch( tkJomaReq(data) )
    
})


export default  connect(mapStateToProps, mapDispatchToProps ) (TkJoma);