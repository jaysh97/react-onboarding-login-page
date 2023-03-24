import React, { useState } from "react";
import avatar from './avatar.png';
import './App.css';
import {Link} from 'react-router-dom';
function Navigation() {
return(
    <header>
   <div className="box">
    <label  className="logincreds" htmlFor="uname"><b>User</b></label>
    <div className="container">
    <input type="text" placeholder="Enter Username" name="uname" onChange={handleUsername} value = {username} required/>
    </div>

    <label className="logincreds" htmlFor="pwd"><b>Password</b></label>
    <div className="container">
    <input type="password" placeholder="Enter Password" name="psw" onChange={handlePassword} value = {password} required/>
    </div>
    </div>
</header>
   
    
);
}

export default Nav;