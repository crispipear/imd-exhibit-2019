import React, { Component } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/footer.scss';
import { ReactComponent as FACEBOOK } from '../assets/facebook.svg';
import { ReactComponent as TWITTER } from '../assets/twitter.svg';
import { ReactComponent as LINKEDIN } from '../assets/linkedin.svg';

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
class Footer extends Component {
  render() {
    const credits = this.props.getContent('credits') || []
    return (
      <div className='footer'>
        <div className='container'>
          <h1>Credits</h1>
          <div className='footer-content'>
            {
              credits.map((credit, key) =>
                <div key={key} className='footer-block'>
                  <h2>{credit.name}</h2>
                  {
                    credit.people.map((name, key) =>
                      <h3 key={key}>{name}</h3>
                    )
                  }
                </div>
              )
            }
          </div>
          <div className='footer-footer'>
            <div>
              <h3>University of Washington</h3>
              <a href="https://www.uwb.edu/media-design" target="_blank">Interactive Media Design</a>
              <h3>2019</h3>
            </div>
            <div>
              <h3>Share</h3>
              <p className='footer-share'>
                {
                  share.map((item, key) =>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
                      {item.icon}
                    </a>
                  )
                }
              </p>
              <h3>Contact</h3>
              <a href='mailto: uwbimd2019@gmail.com'>uwbimd2019@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({ getContent }) => (
      <Footer getContent={getContent} />
    )}
  </SiteConsumer>
)
