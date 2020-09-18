import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Resume from './components/Resume'
import ProjectsGrid from './components/ProjectsGrid'
import Contact from './components/Contact'
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <CssBaseline/>
    <NavBar/>
    <Switch> 
      <Route exact path="/" component={Header}/> 
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/projects" component={ProjectsGrid}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    </>
  );
}

export default App;
