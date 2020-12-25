import React, {useCallback, useContext} from "react";
import "./Login.css";
import SHLogo from "../Assets/synhub-logo.png";
import {withRouter, Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import app from '../Firebase/config';
import {AuthContext} from "../auth";
// หน้านี้ต้องการทำ Authentication
function Login({history}) {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email,password} = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value,password.value);
                history.push("/");
            } catch (error) {
                alert(error)
            }
        },
        [history]
    );
    const {currentUser} = useContext(AuthContext);
    if(currentUser) {
        return<Redirect to="/"/>;
    }
  return (
    <div className="login-root">
        <img src={SHLogo} alt="logoSH" class="sh-logo"></img>
        <form onSubmit={handleLogin} className="formSignin">
            <div className="text-input">
                <input className="text-input-1" name="email" type="text" placeholder="Email"></input>
                <input className="text-input-2" name="password" type="password" placeholder="Password"></input>
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
        <div className="need-help">
            <div> 
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Remember me ?</label>
                </div>
            </div>
            <div>Forget Password</div>
        </div>
        
    </div>
  );
}

export default Login;
