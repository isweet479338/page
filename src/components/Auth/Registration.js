import React from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import {register,  } from '../../services/actions/AuthAction'
import { Link, withRouter } from 'react-router-dom';


function  Registration(props) {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data =>  props.register(data )
   

	if (props.loader == true) {
		return <div className="loader"></div>;
	}
    
    const pp = JSON.parse( props.errMsg );

	return (
		<div className="row justify-content-center">
			<div className="col-xl-10 col-lg-12 col-md-9">

				<div className="card o-hidden border-0 shadow-lg my-5">
					<div className="card-body p-0">

						<div className="row">
							<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
							<div className="col-lg-6">
								<div className="p-5">
									<div className="text-center">
										<h1 className="h4 text-gray-900 mb-4">Welcome Back Admin! </h1>
										<h3>{props.sucMsg && 
                                        <>
                                            {props.sucMsg}
                                            <Link to='/' > Login Here Please </Link>
                                        </>
                                        }</h3>
                                        {props.errMsg && 
                                        <>
                                        {props.errMsg && 
                                        <p>{  pp.name }</p>
                                        }

                                        {props.errMsg && 
                                        <p>{ pp.email }</p>
                                        }

                                        {props.errMsg && 
                                        <p>{ pp.password }</p>
                                        }
                                       
                                        </>
                                        }

									</div>
									<form onSubmit={handleSubmit(onSubmit)} className="user">

										<div className="form-group">
											<input type="text"   {...register("name", { required: true })} placeholder='Name...' className="form-control form-control-user" id="exampleInputEmail" />
											{errors.name && <span>This field is required</span>}
										</div>
										
                                        <div className="form-group">
											<input type="email"   {...register("email", { required: true })} placeholder='Email...' className="form-control form-control-user" id="exampleInputEmail" />
											{errors.email && <span>This field is required</span>}
										</div>
										
                                        <div className="form-group">
											<input type="password"   {...register("password_confirmation", { required: true })} placeholder='Password...' className="form-control form-control-user" id="exampleInputEmail" />
											{errors.password_confirmation && <span>This field is required</span>}
										</div>
										<div className="form-group">
											<input type="password"  {...register("password", { required: true })} placeholder='Confirm Password...' className="form-control form-control-user" />
											{errors.password && <span>This field is required</span>}
										</div>

										<button type="submit" className="btn btn-primary btn-user btn-block">
											Login
			  </button>
										<hr />

									</form>
									<hr />

									<Link to="/">Login</Link>

								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>


	)
}

const mapStateToProps = (state) => {
	return {
		loader: state.auth.loading,
		errMsg: state.auth.errMsg,
		sucMsg: state.auth.sucMsg,
	}
}


export default withRouter(connect(mapStateToProps, { register,  })( Registration ));