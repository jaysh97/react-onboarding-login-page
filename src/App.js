import React, {useState} from "react";
import './App.css';
import {Login} from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Nav} from './Nav';
function App() {
  return(
  <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/nav" component={Nav} />
      </Switch>
    </Router>
  );
}

export default App;
