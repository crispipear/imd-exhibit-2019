import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/home.scss';
import {ReactComponent as FACEBOOK} from '../assets/facebook.svg';
import {ReactComponent as TWITTER} from '../assets/twitter.svg';
import {ReactComponent as LINKEDIN} from '../assets/linkedin.svg';

const share = [
  {
    link: "http://www.facebook.com/sharer.php?u=https://uwbimd2019.com",
    icon: <FACEBOOK />
  },
  {
    link: "http://www.linkedin.com/shareArticle?mini=true&url=https://uwbimd2019.com",
    icon: <LINKEDIN />
  },
  {
    link: "https://twitter.com/share?url=https://uwbimd2019.com",
    icon: <TWITTER />
  },
]

class About extends Component {
  render() {
    return (
        this.props.siteContent ?
        <div className='about container'>
            <div className='left'>
              <h1>our vision</h1>
                <p>
                  {this.props.siteContent.about}
                </p>
            </div>
            <div className='right'>
              <h1>capstone exhibition</h1>
                <h2>Location</h2>
                <p><a href="https://www.uwb.edu/arc" target="_blank" rel="noopener noreferrer" >
                  {this.props.siteContent.exhibit_location}</a>
                </p>
                <h2>Date</h2>
                <p>{this.props.siteContent.exhibit_date}</p>
                <h2>Time</h2>
                <p>{this.props.siteContent.exhibit_time}</p>
                <h2>Share</h2>
                <p className="about-share">
                  {
                    share.map((item, key) => 
                      <a href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
                        {item.icon}
                      </a>
                    )
                  }
                </p>
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
