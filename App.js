import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Palindrometexarea from './PalindromeTextArea';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           <Palindrometexarea />
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
