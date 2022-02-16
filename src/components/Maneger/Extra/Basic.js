import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import ManHead from '../../Auth/ManHead';
import ManFoot from '../../Auth/ManFoot';
import { getMillRate, setMillRate } from '../../../services/actions/BazarAction';


function Basic(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.setMillRate( data )
    
    useEffect(() => {
        props.getMillRate()
    }, [])


    return (
        <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Extra About Mill</h2><p> {props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                    <form onSubmit={handleSubmit(onSubmit)} className="user">
                        <div className="form-group">
                         <label htmlFor="pp">Set Mill rate</label>
                            <input type="number" defaultValue={ props.millRate.desc }  {...register("rate", { required: true })} placeholder='Mill Rate' className="form-control form-control-user" id="pp" />
                            {errors.rate && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                            Set Mill Rate
                            </button>
                        <hr />

                    </form>




                </div><div className="card-footer"  >
                        <p>jar hate tk deben sudu take check kore tk amount din. onno jon k check korar dorkar nai, 2 jon k check korben na</p>
                    </div>
                </div> </div>

            </div></div></div> </div></div>  <ManFoot /> </>
    );
}

const mapStateToProps = (state) => ({
    millRate : state.bazar.millRate,
    sucMsg : state.bazar.sucMsg,
   
})

const mapDispatchToProps = (dispatch) => ({
    getMillRate : () => dispatch( getMillRate() ),
    setMillRate : (data) => dispatch( setMillRate (data) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Basic);