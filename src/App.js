import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
// import Resume from './components/Resume'
import Resume from './components/Resume'
import ParticlesCanvas from './components/ParticlesCanvas'
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <CssBaseline/>
    <NavBar/>
    <ParticlesCanvas/>
    <Switch> 
      <Route exact path="/" component={Header}/> 
      <Route exact path="/resume" component={Resume}/>
      {/* <Route exact path="/projects" component={}/>
      <Route exact path="/contace" component={}/> */}
    </Switch>
    </>
  );
}

export default App;
