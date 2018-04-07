import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
//import Memory from './compoents/Memory';
// import Rules from './components/Rules';
import Game from './pages/Game/Game.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
