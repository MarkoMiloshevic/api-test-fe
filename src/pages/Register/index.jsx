import React, { useState } from 'react';

// Redux
import {
  register,
} from "../../redux/register/registerAction";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";


const Register = ({register, registerRes}) => {

  const [registerData, setRegisterData] = useState({});

  console.log(registerRes)

  return (
    <div className="App">
      <input type='text' placeholder={'Username*'} onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} />
      <input type='email' placeholder={'Email*'} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
      <input autoCorrect={false} type='password' placeholder={'Password*'} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
      <button onClick={() => register(registerData)}>
        Register
      </button>
      {registerRes.error &&
        registerRes.error
      }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  register: bindActionCreators(register, dispatch),
});

const mapStateToProps = ({ register }) => {
  return {
    registerRes: register
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Register);

