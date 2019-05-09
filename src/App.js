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
class App extends Component {
  state={
    loaded: false
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 2000)
  }
  render() {
    return (
      <SiteProvider>
        <div className="app" style={{maxHeight: !this.state.loaded ? '100vh': 'none'}}>
          <LoadScreen loaded={this.state.loaded}/>
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
