import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';


class Landing extends Component {
  render() {
    return (
      this.props.siteContent ?
          <div className='landing'>
            <div className='scroll'>
               <span>Scroll</span>
               <div/>
            </div>
            <h1>
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
    {({siteContent}) => (
      <Landing siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
