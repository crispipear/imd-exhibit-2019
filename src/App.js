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
import LoadScreen from './components/LoadScreen';
import Project from './components/Project';
class App extends Component {
  state={
    loaded: false,
    position: 'fixed'
  }
  handleLoad = () => {
    setTimeout(() => {
      this.setState({
        loaded: true,
        position: 'unset'
      })
    }, 3000)
  }
  componentDidMount(){
    window.addEventListener('load', this.handleLoad);
  }
  render() {
    return (
      <SiteProvider>
        <div className="app" style={{position: this.state.position}}>
          <LoadScreen loaded={this.state.loaded}/>
          <Project/>
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
