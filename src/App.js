import React from 'react';
import logo from './logo.svg';
import './App.css';
// ignore the above for now, we will get to them later

import product, { numbers } from './math.js'
// we don't need sum function this time

console.log(numbers.reduce(product));
// 11250000


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

