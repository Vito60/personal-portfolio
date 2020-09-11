import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Particles from './components/Particles'
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <CssBaseline/>
    <NavBar/>
    <Particles/>
    <Switch> 
      <Route exact path="/" component={Header}/> 
      {/* <Route exact path="/projects" component={}/>
      <Route exact path="/contace" component={}/>
      <Route exact path="/resume" component={}/> */}
    </Switch>
    </>
  );
}

export default App;
