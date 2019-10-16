import React, { Component } from 'react';
import logo from './logo.svg'
import { Route, Switch } from 'react-router-dom';
import About from './components/About'

import './App.css';

class App extends React.Component {

  state = {
    data: null
  };

  componentDidMount(){
    this.callAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  

  render(){
    return(
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
          <p>{this.state.data}</p>
        </div>

    )
  }


  }
