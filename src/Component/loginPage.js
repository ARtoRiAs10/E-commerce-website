import React from 'react';
import '../Lf.css';
import Layout from './layout';
const LoginPage = () => {
  return (
    <>
    <Layout/>
	{/* <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form">
        <p>
          <input type="text" id="username" name="username" placeholder="Username" required /><br/>
          <i className="validation"><span></span><span></span></i>
        </p>
        <p>
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <i className="validation"><span></span><span></span></i>
        </p>
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>
      <div id="create-account-wrap">
        <p>Not a member? <a href="/register">Create Account</a></p>
      </div>
    </div> */}
	
<div class="login">
  <div class="login-header">
    <h1>Login</h1>
  </div>
  <div class="login-form">
    <h3>Username:</h3>
    <input type="text" placeholder="Username"/><br/>
    <h3>Password:</h3>
    <input type="password" placeholder="Password"/>
    <br/>
    <input type="button" value="Login" class="login-button"/>
    <br/>
    <a class="sign-up" href="/register">Sign Up!</a>
    <br/>
    <h6 class="no-access">Can't access your account?</h6>
  </div>
</div>
<div class="error-page">
  
</div>
    </>
  )
}


export default LoginPage;

