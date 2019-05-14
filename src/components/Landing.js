import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';


class Landing extends Component {
  state = {
    movement: 0,
    gradient: 'radial-gradient(at 30% 25%, #fff, #d7dee3)'
  }
  _handleMouseMove = e => {
    let xperc = Math.round(e.pageX / this.props.browser.width * 100)
    let yperc = Math.round(e.pageY / this.props.browser.height * 100)
    this.setState({
      gradient: `radial-gradient(at ${xperc}% ${yperc}%, #fff, #d7dee3)`
    })
  }
  _handleScroll = e => {
    this.setState({
      movement: e.wheelDelta <= 0 ? 15 : 0
    })
  }
  
  componentDidMount() {
    window.addEventListener('wheel', this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this._handleScroll);
  }

  render() {
    return (
      this.props.siteContent ?
          <div className='landing container'  onMouseMove = {this._handleMouseMove}>
          <div className='landing-gradient' style={{background: this.state.gradient}}/>
            <div className='scroll'>
               <span>Scroll</span>
               <div/>
            </div>
            <h1 style={{transform: `translateY(${this.state.movement}%)`}}>
                {this.props.siteContent && this.props.siteContent.tagline}
            </h1>
          </div>
        :
        <div className='landing'/>

    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent, browser}) => (
      <Landing siteContent={siteContent} browser={browser}/>
    )}
  </SiteConsumer>
)
