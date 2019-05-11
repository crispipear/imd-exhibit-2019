import React, { Component } from 'react';

export default class StudentCard extends Component {
  state = {
    hover: false
  }
  render() {
    return (
      <div className='student-card'
        onClick={() => {this.props.showStudentInfo(this.props.student.name)}}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
      >
        <div className='student-portrait'
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

        <h1>{this.props.student.name}</h1>
      </div>
    );
  }
}
