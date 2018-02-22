import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
      </div>
    );
  }
}

export default App;
