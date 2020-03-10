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
    const {getContent, getAsset} = this.props;
    return (
        <div className='about container'>
            <div className='about-info'>
            <div className='left'>
              <h1>About Us</h1>
                {
                   getContent('about').split("//").map((paragraph, key)=>
                    <p key={key}>
                      {paragraph}
                    </p>
                  )
                }
            </div>
            <div className='right'>
              <h1>Capstone Exhibition</h1>
                <h2>Location</h2>
                <p><a href="https://www.uwb.edu/arc" target="_blank" rel="noopener noreferrer" >
                  {getContent('exhibit_location')}
                </a></p>
                <h2>Date</h2>
                <p>{getContent('exhibit_date')}</p>
                <h2>Time</h2>
                <p>{getContent('exhibit_time')}</p>
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
            <div className='about-photo-grid'>
                {
                  getContent('about_images').length > 0 &&
                  getContent('about_images').map(p => 
                    <div className='item' key={p}>
                      <img src={getAsset(p)}/>
                    </div>
                  )
                }
            </div>
        </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({getContent, getAsset}) => (
      <About getContent={getContent} getAsset={getAsset}/>
    )}
  </SiteConsumer>
)
