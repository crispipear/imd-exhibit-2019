import React, { Component } from 'react';

export default class StudentCard extends Component {
  render() {
    return (
      <div className='student-card' onClick={() => this.props.showStudentInfo(this.props.name)}>
        <div className='student-portrait'
             style={{backgroundImage: `url(${this.props.assets.sample_portrait})`}}
        />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
