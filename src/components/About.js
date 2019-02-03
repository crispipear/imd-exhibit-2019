import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';


class About extends Component {
  render() {
    return (
        this.props.siteContent ?
        <div className='about'>
            <div className='left'>
              <h1>our vision</h1>
                <p>
                  {this.props.siteContent.about}
                </p>
            </div>
            <div className='right'>
              <h1>capstone exhibition</h1>
                <h2>Location</h2>
                <p>{this.props.siteContent.exhibit_location}</p>
                <h2>Date</h2>
                <p>{this.props.siteContent.exhibit_date}</p>
                <h2>Time</h2>
                <p>{this.props.siteContent.exhibit_time}</p>
            </div>
        </div>
        :
        <div className='about'/>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <About siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
