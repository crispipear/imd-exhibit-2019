import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/global.scss';
import {SiteProvider} from './components/SiteContext';
import Students from './components/Students';
import About from './components/About';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Capstones from './components/Capstones';
import Footer from './components/Footer';
import StudentInfo from './components/StudentInfo';

class App extends Component {

  render() {
    return (
      <SiteProvider>
        <div className="app">
          <StudentInfo/>
          <Menu/>
          <Landing/>
          <About/>
          <Capstones/>
          <Students/>
          <Footer/>
        </div>
      </SiteProvider>
    );
  }
}

export default App;
