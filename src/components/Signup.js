import React, { useState } from "react";
import { signup } from "../redux/actions/authActions";
import {connect} from "react-redux"

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmChange = (e) => {
      setPasswordConfirmation(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        let user = {
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        };
        signUp(user)
    }

  return (
    <div>
      <h2>Signup Below:</h2>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange}/>
        <br />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <br />
        <label>Confirm Password</label>
        <input type="text" value={passwordConfirmation} onChange={handlePasswordConfirmChange} />
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
