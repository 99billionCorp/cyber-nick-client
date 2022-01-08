import React, { useState, useContext } from 'react';
import './style.scss';
import Email from '../authComponents/Email';
import Password from '../authComponents/Password';
import SubmitBtn from '../authComponents/SubmitBtn';
import { Context } from 'context.js';
import {LOGIN_URL} from "constants.js";
import axios from "axios";

// import Message from "./../../message";

export default function SignIn() {
  const { onUserLogin } = useContext(Context);

  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  const onLoginChange = (login) => {
    setUser({ ...user, login });
  };

  const onPasswordChange = (password) => {
    setUser({ ...user, password });
  };

  const checkLogin = async (e) => {
    e.preventDefault();
    console.log('start', LOGIN_URL)
    const res = await axios.post(LOGIN_URL, user)
    const userData = res.data
    console.log(userData)
    onUserLogin(userData);
    if (userData.ok) {
      window.location.replace('/');
    }
  };

  return (
    <div className="SignIn">
      <div className="formBgc">
        {/* <Message text="Hello" /> */}
        <form
          onSubmit={checkLogin}
        >
          <Email onLoginChange={onLoginChange} />
          <Password onPasswordChange={onPasswordChange} />
          <SubmitBtn text="Войти" />
        </form>
      </div>
    </div>
  );
}
