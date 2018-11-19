import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SiteProvider} from './components/SiteContext'
import Students from './components/Students'

class App extends Component {

  render() {
    return (
      <SiteProvider>
        <div className="app">
          <Students/>
        </div>
      </SiteProvider>
    );
  }
}

export default App;
