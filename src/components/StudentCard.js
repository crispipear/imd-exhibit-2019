import React, { Component } from 'react';
import {ReactComponent as LINKEDIN} from '../assets/linkedin.svg';
import {ReactComponent as LINK} from '../assets/link.svg';

export default class StudentCard extends Component {
  state = {
    hover: false
  }
  render() {
    return (
      <div className='student-card'>
        <div className='student-portrait'
        onClick={() => {this.props.showStudentInfo(this.props.student.name)}}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        >
          <div className='alt'
            style={{
              backgroundImage: `url(${this.props.student.portraitAlt})`,
              opacity: (this.state.hover || (this.props.clicked && this.props.curStudent == this.props.student.name)) ? 1 : 0
            }}
          />
          <div className='normal'
            style={{ backgroundImage: `url(${this.props.student.portrait})` }}
          />
        </div>
        <div className='student-card-info'>
          <h1>{this.props.student.name}</h1>
          {
            window.innerWidth > 1023 &&
            <div>
              {this.props.student.portfolio && <a target="_blank" rel="noopener noreferrer" href={this.props.student.portfolio}>
                <LINK/> 
              </a>}
              {this.props.student.linkedin && <a target="_blank" rel="noopener noreferrer" href={this.props.student.linkedin}>
                <LINKEDIN/> 
              </a>}
          </div>
          }
        </div>
      </div>
    );
  }
}
