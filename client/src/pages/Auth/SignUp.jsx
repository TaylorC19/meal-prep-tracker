import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    //const email = e.target.
    const userCred = await axios.post('/auth/signup', { 
      email: email, 
      password: password
    })
    console.log(userCred);
  }

  return (
    <div>
      <form onSubmit={handleSignUp} action="">
        <h1>Welcome New User!</h1>
        <label htmlFor="signup-email">Email</label>
        <input
          type="email"
          id="signup-email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="someone@somewhere.com"
        />
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button type="submit">Sign up!</button>
      </form>
      <p>Already have an account? Sign in <Link to='/signin'>here</Link>.</p>
    </div>
  );
}

export default SignUp;
