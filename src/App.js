import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import styles from './App.css';
// import Router from './router';
import './App.css';
import Home from './components/Home';
import Featuredjobs from './components/Featuredjobs';
import Position from './components/Positon';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/home/jobs" component={Featuredjobs} />
        <Route path="/home/position" component={Position} />
        <Route path="/home/how-it-works" component={HowItWorks} />
      </div>
    </Router>
  );
}

export default App;
