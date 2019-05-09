import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/footer.scss';


const exhibit = {
  website: ['Su Li', 'Yin Yin', 'Benjamin Siev', 'Hannah Tashiro', 'Kyle Rhodes', 'Andrea Brado'],
  committee: ['Rena Chen', 'Stephen Epperson', 'Nicole Lee', 'Jacob Luna', 'Sergio Mejia', 'Jeff Oh',
   'Jimmy Seifert', 'Benjamin Siev', 'Hannah Tashiro', 'Junior Tran-Thien'],
   faculty: ['David Socha', 'Carrie Bodle', 'Abraham Avnisan', 
   'micha cárdenas', 'Mark Chen', 'Wanda Gregory', 'Mark Kochanski', 'Arnie Lund',
   'Sara McDermott', 'Keiko Miyamoto'],
  marketing: ['Hannah Ferry', 'Maxton McGuire', 'Rachel Raymond', 'Cynthia Thais'],
  catering: ['Hannah Ferry', 'Sara McDermott', 'Rachel Raymond'],
  photography: ['Kyle Olason'],
}
class About extends Component {
  render() {
    return (
        <div className='footer'>
        <div className='container'>
          <h1>Credits</h1>
          <div className='footer-content'>
            {
              Object.keys(exhibit).map((role, key) => 
                <div key={key} className='footer-block'>
                  <h2>{role == 'faculty' ? 'faculty (c/o 2019)' : role == 'committee' ? 'exhibit committee': role}</h2>
                  {
                    exhibit[role].map((name, key) => 
                      <h3 key={key}>{name}</h3>
                    )
                  }
                </div>
              )
            }
          </div>
          <div className='footer-footer'>
              <h3>University of Washington</h3>
              <a href="https://www.uwb.edu/media-design" target="_blank">Interactive Media Design</a>
              <h3>2019</h3>
          </div>
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
