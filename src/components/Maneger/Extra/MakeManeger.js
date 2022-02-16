import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import ManHead from '../../Auth/ManHead';
import ManFoot from '../../Auth/ManFoot';
import { getManeger, setManeger } from '../../../services/actions/BazarAction';


function MakeManeger(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.setManeger( data )
    
    useEffect(() => {
        props.getManeger()
    }, [])


    return (
        <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Extra About Mill</h2><p> {props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                    <form onSubmit={handleSubmit(onSubmit)} className="user">
                        <div className="form-group">
                         <label htmlFor="pp">New Maneger Email Address</label>
                            <input type="email" {...register("email", { required: true })} placeholder='Enter Maneger Email Address' className="form-control form-control-user" id="pp" />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <h1>Old Maneger was: { props.maneger.name }</h1>
            { props.newManeger != '' &&
                        <h1>New Maneger was: { props.newManeger }</h1>
            }
                        <button type="submit" className="btn btn-primary btn-user btn-block">
                            Set New Maneger
                            </button>
                        <hr />

                    </form>
           
                </div><div className="card-footer"  >
                        <p> need word, when maneger change rediret to home</p>
                    </div>
                </div> </div>

            </div></div></div> </div></div>  <ManFoot /> </>
    );
}

const mapStateToProps = (state) => ({
    maneger : state.bazar.maneger,
    newManeger : state.bazar.newManeger,
    sucMsg : state.bazar.sucMsg,
   
})

const mapDispatchToProps = (dispatch) => ({
    getManeger : () => dispatch( getManeger() ),
    setManeger : (data) => dispatch( setManeger (data) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(MakeManeger);