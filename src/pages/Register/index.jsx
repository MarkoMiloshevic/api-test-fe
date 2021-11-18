import React, { useState } from "react";

//component
import MiniFooter from "../../components/miniFooter/";

// Redux
import { register } from "../../redux/register/registerAction";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { useForm } from 'react-hook-form';

const Register = ({ registerSend, registerRes }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className="register-wrapper">
      <form className="input-wrappers">
        <div className="single-input">
          <p>Enter your username</p>
          <input
            className={watch('username') !== '' && 'filled-input'}
            type="text"
            placeholder={"Username"}
            {...register('username', {required: true})}
          />
          {errors.username?.type === 'required' && <p className="form-error">First name is required</p>}
        </div>
        <div className="single-input">
          <p>Enter your email</p>
          <input
            className={watch('email') !== '' && 'filled-input'}
            type="email"
            placeholder={"Email"}
            {...register('email', {required: true})}
          />
        </div>
        <div className="single-input">
          <p>Enter your password</p>
          <input
            className={watch('password') !== '' && 'filled-input'}
            autoCorrect={false}
            type="password"
            placeholder={"Password"}
            {...register('password', {required: true})}
          />
        </div>
        <div className="single-input">
          <p>Confirm your password</p>
          <input
            autoCorrect={false}
            type="password"
            placeholder={"Confirm password"}
          />
        </div> 
        <div className="error-field">
          <p>{registerRes.error && registerRes.error}</p>
        </div>
      </form>
      <div className="button-wrapper">
        <Link className="main-button" to={"/"}>
          Go back
        </Link>
        <button
          className="main-button"
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </button>
      </div>
      <MiniFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerSend: bindActionCreators(register, dispatch),
});

const mapStateToProps = ({ register }) => {
  return {
    registerRes: register,
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Register);
