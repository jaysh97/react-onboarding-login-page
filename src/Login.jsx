import React, { useState } from "react";
import avatar from './avatar.png';
import './App.css';
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       if(username === 'sandy' && password === 'Qwerty' || username === 'sandy1' && password === 'Qwerty1' || username === 'sandy2' && password === 'Qwerty2' || username === 'sandy4' && password === 'Qwerty4'){
        setIsLoggedIn(true);
       }
    };
     
    if(isLoggedIn){
        props.history.push('/Nav');
    }
return(
<div>
<h2 className="header">Employee Polls</h2>
<form onSubmit= {handleSubmit}>
     <div className="imgcontainer">
    <img src={avatar} alt="Avatar" className="imgavatar"/>
    <h3  className="header">Login</h3>
    </div>

    <div className="box">
    <label  className="logincreds" htmlFor="uname"><b>User</b></label>
    <div className="container">
    <input type="text" placeholder="Enter Username" name="uname" onChange={handleUsername} value = {username} required/>
    </div>

    <label className="logincreds" htmlFor="pwd"><b>Password</b></label>
    <div className="container">
    <input type="password" placeholder="Enter Password" name="psw" onChange={handlePassword} value = {password} required/>
    </div>

    <div className="logincreds">
    <button className="button" type="submit" >Submit</button>
    </div>

    </div>
    <br/>
    <br/>
    <br/>
</form>
</div>
);
}
export default Login;