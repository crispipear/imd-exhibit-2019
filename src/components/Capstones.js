import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import CapstoneCard from './CapstoneCard'
import '../styles/capstones.scss';

class Capstones extends Component {

  render() {
    return (
        <div className="capstones container">
          <span className="capstones-title">Capstone Projects</span>
          <span className="capstones-title2">We are still working hard on crafting our projects, stay tuned!</span>
          <div className="capstones-line"/>
          <div className="capstones-cards-container">
            {this.props.data&&
              this.props.data.map((capstone, key) => (
                <CapstoneCard 
                    showProjInfo={this.props.showProjInfo}
                    capstone={capstone}
                    key={key}
                    browserWidth={this.props.browser.width}
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
    {({projects, showProjInfo, browser}) => (
      <Capstones data={projects} showProjInfo={showProjInfo} browser={browser}/>
    )}
  </SiteConsumer>
)
