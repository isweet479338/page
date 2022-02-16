import React from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { validation } from '../services/actions/action'




function Validation(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmitttt = data => props.validation( data )


  
  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmitttt)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
    <br />

      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}


      <br /><br /><br />

      <select {...register("AGE", { required: true })} >
      <option value="20">20</option>
      <option value="30">30</option>
    </select>

      
      <input type="submit" />
    </form>
  );
}
// const mapDispatchToProps = dispatch => ({

//   validation: onSubmitttt => dispatch( validation(onSubmitttt)),

// })

export default connect( null,  { validation } )(Validation);