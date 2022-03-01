import React, { useState } from "react";

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const state = {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
    }

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
        console.log(state)
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
