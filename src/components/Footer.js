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

// const credits = [
//   {
//     name: 'Website',
//     people: ['Su Li', 'Yin Yin', 'Benjamin Siev', 'Hannah Tashiro', 'Andrea Brado', 'Kyle Rhodes']
//   },
//   {
//     name: 'Exhibit Committee',
//     people: ['Abraham Avnisan', 'Rena Chen', 'Stephen Epperson', 'Nicole Lee', 'Jacob Luna', 'Sergio Mejia', 'Jeff Oh',
//     'Jimmy Seifert', 'Benjamin Siev', 'Hannah Tashiro', 'Junior Tran-Thien']
//   },
//   {
//     name: 'Faculty(c/o 2019)',
//     people: ['David Socha', 'Carrie Bodle', 'Abraham Avnisan',
//     'micha cárdenas', 'Mark Chen', 'Wanda Gregory', 'Mark Kochanski', 'Arnie Lund',
//     'Sara McDermott', 'Keiko Miyamoto']
//   },
//   {
//     name: 'Special Thanks',
//     people:['Rachel Raymond','Maxton McGuire', 'Lorrie Cain','Hannah Ferry', 'Kyle Olason', 'Christa Tebbs', 'Cynthia Thais']
//   }
// ]
class About extends Component {
  render() {
    const credits = this.props.siteContent.credits ? this.props.siteContent.credits.credits || [] : []
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
    {({ siteContent }) => (
      <About siteContent={siteContent} />
    )}
  </SiteConsumer>
)
