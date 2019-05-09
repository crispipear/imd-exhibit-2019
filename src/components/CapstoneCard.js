import React, { Component } from 'react';

export default class StudentCard extends Component {
  state = {
    url: '',
    teamMembers: []
  }
  componentDidMount(){
    let image = this.props.capstone.featuredImage.fields.file
    let url = 'https://' + image.url
    let teamMembers = this.props.capstone.teamMembers.split(",")
    this.setState({
      url,
      teamMembers
    })
  }

  render() {
    return (
      <div className='capstone-card'>
        <div className='capstone-card-image'
          style={{backgroundImage: `url(${this.state.url})`}}/>
        <div className='capstone-card-content'>
          <h1>{this.props.capstone.name}</h1>
          <p>{
            this.state.teamMembers.map((m, key) => <span key={key}>{m}{key!=this.state.teamMembers.length-1 && " / "}</span>)
          }</p>
        </div>
      </div>
    );
  }
}