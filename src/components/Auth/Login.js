import React, { Component } from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { login, rediretfalse } from '../../services/actions/AuthAction'
import { Link, withRouter, Redirect, useLocation } from 'react-router-dom';


function Login(props) {

	const location = useLocation();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => props.login(data )

	if (props.loader == true) {
		return <div className="loader"></div>;
	}

	if (props.redirect) {
		// props.rediretfalse()
	   // return <Redirect to='/home' />
	}

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
										<h3>{props.errMsg}</h3>
									</div>

									{props.redirect !== true && 
									<>
									<form onSubmit={handleSubmit(onSubmit)} className="user">

										<div className="form-group">
											<input type="email"   {...register("email", { required: true })} placeholder='Email...' className="form-control form-control-user" id="exampleInputEmail" />
											{errors.email && <span>This field is required</span>}
										</div>
										<div className="form-group">
											<input type="password"  {...register("password", { required: true })} placeholder='Password' className="form-control form-control-user" />
											{errors.password && <span>This field is required</span>}
										</div>

										<button type="submit" className="btn btn-primary btn-user btn-block">
											Login
			  </button>
										<hr />

									</form>
									</>
									}

									{props.redirect === true && 
									<>
										<p>Login Success</p>
										<Link to="/home">Dashboard</Link>

									</>
									}
									<hr />

									<Link to="/registration">Registration</Link>

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
		redirect: state.auth.redirect,
	}
}


export default withRouter(connect(mapStateToProps, { login, rediretfalse })(Login));