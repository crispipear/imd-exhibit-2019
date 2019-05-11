import React, { Component } from 'react';
import '../styles/menu.scss';
import { scrollTo } from '../utils/scroll';
import { SiteConsumer } from './SiteContext';

class Menu extends Component {
  state = {
    scrollUp: false,
    shadow: false,
    mobileMenu: false
  }
  _scroll = name => {
    let loc = document.querySelector(name).offsetTop
    scrollTo(loc, 0)
    this.state.mobileMenu && this.setState({
      mobileMenu: false
    })
  }

  componentDidMount() {
    window.addEventListener('wheel', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this._handleScroll);
  }

  _handleScroll = e => {
    if (e.wheelDelta <= 0) {
      !this.state.scrollUp && this.setState({ scrollUp: true })
    } else {
      this.state.scrollUp && this.setState({ scrollUp: false })
      this.setState({
        shadow: window.scrollY <= window.innerHeight ? false : true
      })
    }
  }

  mobileMenu = () => {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }

  render() {
    return (
      <div className={'menu' + (this.state.scrollUp ? ' menu-hidden' : ' menu-appear') + (this.state.shadow ? ' menu-shadow' : '')}>
        <div className='container'>
          <div className='left'>
            <span onClick={() => this._scroll('.app')}>Interactive Media Design 2019</span>
          </div>
          {
            this.props.browser.width > 1023
              ?
              <div className='right'>
                <span onClick={() => this._scroll('.capstones')}>Capstones</span>
                <span onClick={() => this._scroll('.students')}>Students</span>
                <span onClick={() => this._scroll('.about')}>About</span>
              </div>
              :
              <span onClick={this.mobileMenu} className='menu-button'>&#9776;</span>
          }
        </div>
        <div className='menu-mobile'
              style={{
                opacity: (this.props.browser.width <= 1023 && this.state.mobileMenu) ? 1 : 0,
                pointerEvents: this.state.mobileMenu ? 'all' : 'none',
              }}
        >
          <span onClick={this.mobileMenu} className='menu-button'>&times;</span>
          <div className='menu-mobile-items'>
                <span onClick={() => this._scroll('.app')}>Home</span>
                <span onClick={() => this._scroll('.capstones')}>Capstones</span>
                <span onClick={() => this._scroll('.students')}>Students</span>
                <span onClick={() => this._scroll('.about')}>About</span>
          </div>
        </div>
      </div>
    );
  }
}


export default () => (
  <SiteConsumer>
    {({ browser }) => (
      <Menu browser={browser} />
    )}
  </SiteConsumer>
)
