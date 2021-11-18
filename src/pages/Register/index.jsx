import React, { useState } from "react";

//component
import MiniFooter from "../../components/miniFooter/";

// Redux
import { register } from "../../redux/register/registerAction";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const Register = ({ register, registerRes }) => {
  const [registerData, setRegisterData] = useState({
    username: null,
    email: null,
    password: null,
  });

  const registerButton = (data) => {
    if (data.email && data.username && data.password) {
      console.log("sada");
    } else {
      register(data);
    }
  };

  console.log(registerData)

  return (
    <div className="register-wrapper">
      <div className="input-wrappers">
        <div className="single-input">
          <input
            className={`${registerData.username !== null && 'filled-input'}`}
            type="text"
            placeholder={"Username*"}
            onChange={(e) => setRegisterData({...registerData, username: e.target.value })}
            value={registerData.username}
          />
        </div>
        <div className="single-input">
          <input
            className={`${registerData.email !== null && 'filled-input'}`}
            type="email"
            placeholder={"Email*"}
            onChange={(e) => setRegisterData({...registerData, email: e.target.value })}
            value={registerData.email}
          />
        </div>
        <div className="single-input">
          <input
            className={`${registerData.password !== null && 'filled-input'}`}
            autoCorrect={false}
            type="password"
            placeholder={"Password*"}
            onChange={(e) => setRegisterData({...registerData, password: e.target.value })}
            value={registerData.password}
          />
        </div>
        <div className="error-field">
          <p>{registerRes.error && registerRes.error}</p>
        </div>
      </div>
      <div className="button-wrapper">
        <Link className="main-button" to={"/"}>
          Go back
        </Link>
        <button
          className="main-button"
          onClick={() => registerButton(registerData)}
        >
          Register
        </button>
      </div>
      <MiniFooter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: bindActionCreators(register, dispatch),
});

const mapStateToProps = ({ register }) => {
  return {
    registerRes: register,
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Register);
