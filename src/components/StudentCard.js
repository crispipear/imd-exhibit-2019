import React, { Component } from 'react';

export default class StudentCard extends Component {


  render() {
    return (
      <div className='student-card'>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}