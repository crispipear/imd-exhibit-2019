import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import CapstoneCard from './CapstoneCard'
import '../styles/capstones.scss';

class Capstones extends Component {

  render() {
    return (
        <div className="capstones">
          {this.props.data&&
            this.props.data.map((capstone, key) => (
              <CapstoneCard 
                  capstone={capstone}
                  key={key}
                />
            ))
          }
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
