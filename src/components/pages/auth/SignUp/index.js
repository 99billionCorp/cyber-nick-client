import React from 'react';
import './style.scss';
import Email from '../authComponents/Email';
import Password from '../authComponents/Password';
import Name from '../authComponents/Name';
import SubmitBtn from '../authComponents/SubmitBtn';
import {REGISTER_URL} from "constants.js";

export default function SignIn() {
  return (
    <div className="SignUp">
      <div className="formBgc">
        <form action={REGISTER_URL} method="POST">
          <Name />
          <Email />
          <Password />
          <SubmitBtn text="Войти" />
        </form>
      </div>
    </div>
  );
}
