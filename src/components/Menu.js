import React, { Component } from 'react';
import '../styles/menu.scss';
import {scrollTo} from '../utils/scroll';

export default class Menu extends Component {
  state = {
    scrollUp: false,
    shadow: false
  }
  _scroll = name => {
    let loc = document.querySelector(name).offsetTop
    scrollTo(loc, 0)
  }

  componentDidMount() {
    window.addEventListener('wheel', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this._handleScroll);
  }

  _handleScroll = e => {
    if(e.wheelDelta <= 0){
      !this.state.scrollUp && this.setState({scrollUp: true})
    }else{
      this.state.scrollUp && this.setState({scrollUp: false})
      this.setState({
        shadow: window.scrollY <= window.innerHeight ? false : true
      })
    }
  }

  render() {
    return (
      <div className={'menu' + (this.state.scrollUp ? ' menu-hidden' : ' menu-appear') + (this.state.shadow ? ' menu-shadow' : '')}>
        <div className='container'>
          <div className='left'>
              <span onClick={() => this._scroll('.app')}>IMD c/o 2019</span>
          </div>
          <div className='right'>
              <span onClick={() => this._scroll('.capstones')}>Capstones</span>
              <span onClick={() => this._scroll('.students')}>Students</span>
              <span onClick={() => this._scroll('.about')}>About</span>
          </div>
        </div>
      </div>
    );
  }
}
