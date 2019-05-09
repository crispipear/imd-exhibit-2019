import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import CapstoneCard from './CapstoneCard'
import '../styles/capstones.scss';

class Capstones extends Component {

  render() {
    return (
        <div className="capstones container">
          <span className="capstones-title">Capstone Projects</span>
          <div className="capstones-line"/>
          <div className="capstones-cards-container">
            {this.props.data&&
              this.props.data.map((capstone, key) => (
                <CapstoneCard 
                    capstone={capstone}
                    key={key}
                  />
              ))
            }
          </div>
        </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({projects}) => (
      <Capstones data={projects}/>
    )}
  </SiteConsumer>
)
