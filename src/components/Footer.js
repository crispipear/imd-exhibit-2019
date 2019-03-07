import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/footer.scss';

const members = [
  {
    name: 'Su Li',
    role: 'Lead Developer'
  },
  {
    name: 'Yin Yin',
    role: 'Lead Designer'
  },
  {
    name: 'Benjamin Siev'
  },
  {
    name: 'Andrea Brado'
  },
  {
    name: 'Kevin Laird'
  },
  {
    name: "Julian Ngo"
  },
  {
    name: 'Kyle Rhodes'
  },
  {
    name: 'Hannah Tashiro'
  }
]

const faculty = ['David Socha', 'Carrie Bodle', 'Abraham Avnisan', 
                'micha cárdenas', 'Mark Chen', 'Wanda Gregory', 'Mark Kochanski', 'Arnie Lund',
                'Sara McDermott', 'Keiko Miyamoto'
               ]

class About extends Component {
  render() {
    return (
        <div className='footer'>
          <div className='footer-block'>
            <div className='left'>
              <h1>Website made possible by</h1>
            </div>
            <div className='right'>
              {
                members.map((m, key) => 
                  <h3 key={key}>{m.name}<span>{m.role && ' - ' + m.role}</span></h3>
                )
              }
            </div>
          </div>
          <div className='footer-block'>
            <div className='left'>
              <h1>Thanks to <br/>faculty members <br/>(2017 - 2019)</h1>
            </div>
            <div className='right'>
              {
                faculty.map((name, key) => 
                  <h3 key={key}>{name}</h3>
                )
              }
            </div>
          </div>
          <div className='footer-footer'>
              <h3>University of Washington</h3>
              <a href="https://www.uwb.edu/media-design" target="_blank">Interactive Media Design</a>
              <h3>2019</h3>
          </div>
        </div>
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
