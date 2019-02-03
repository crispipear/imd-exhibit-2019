import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/global.scss';
import {SiteProvider} from './components/SiteContext';
import Students from './components/Students';
import About from './components/About';
import Landing from './components/Landing';
import Menu from './components/Menu';

class App extends Component {

  render() {
    return (
      <SiteProvider>
        <div className="app">
          <Menu/>
          <Landing/>
          <About/>
          <Students/>
        </div>
      </SiteProvider>
    );
  }
}

export default App;
