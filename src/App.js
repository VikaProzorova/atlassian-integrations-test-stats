import React, { Component } from 'react';
import logo from './atlassian_round.png';
import './App.css';
import IntegrationsList from './components/IntegrationsList.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Atlassian integrations tests stat page</h1>
        </header>
        <IntegrationsList />
      </div>
    );
  }
}

export default App;
