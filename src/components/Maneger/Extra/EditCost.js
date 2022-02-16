import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import ManHead from '../../Auth/ManHead';
import ManFoot from '../../Auth/ManFoot';
import { costById, editById, } from '../../../services/actions/BazarAction';


function EditCost(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        props.editById( data );
        props.history.push('/all-cost');
    }


    useEffect(() => {
        props.costById(props.match.params.id)
    }, [])


    return (
        <><ManHead /> <div className="card o-hidden border-0 shadow-lg my-5"><div className="card-body p-0"> <div className="row">
            <div className="col-lg-12"> <div className="text-center"> <div className="card-header"  >
                <h2>Add Your Mill Cost</h2><p> {props.sucMsg}</p></div>

                <div className='row' ><div className='col-md-12 text-center'  ><div className="card-body"  >

                    <form onSubmit={handleSubmit(onSubmit)} className="user">
                        <div className="form-group">

                            <label htmlFor="pp">Expense Section </label>
                            <input type="text" defaultValue={props.cost.couse}  {...register("cause", { required: true })} placeholder='Expense Section' className="form-control form-control-user" />
                            {errors.cause && <span>This field is required</span>}
                        </div>

                        <input type='hidden' defaultValue={props.match.params.id} {...register("id")} />

                        <div className="form-group">
                            <label htmlFor="pp">Date {`${props.cost.m}/${props.cost.d}/${props.cost.y}`}</label>
                            <input type="date" defaultValue={`${props.cost.m}/${props.cost.d}/${props.cost.y}`}  {...register("date", { required: true })} placeholder='Expense Amount' className="form-control form-control-user" />
                            {errors.date && <span>This field is required</span>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="pp">Amount</label>
                            <input type="number" defaultValue={props.cost.amount} {...register("amount", { required: true })} placeholder='Expense Amount' className="form-control form-control-user" />
                            {errors.amount && <span>This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="pp">Set Mill rate</label>

                            <textarea placeholder='Add Some Details ' className="form-control form-control-user" {...register("desc")}>{props.cost.desc}</textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-user btn-block">
                            Add
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
    sucMsg: state.bazar.sucMsg,
    cost: state.bazar.editCost,

})

const mapDispatchToProps = (dispatch) => ({
    costById: (data) => dispatch(costById(data)),
    editById: (data) => dispatch(editById(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCost);