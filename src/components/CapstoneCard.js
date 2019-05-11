import React, { Component } from 'react';

export default class StudentCard extends Component {
  state = {
    url: ''
  }
  componentDidMount(){
    let image = this.props.capstone.featuredImage.fields.file
    let url = 'https://' + image.url
    this.setState({
      url
    })
  }

  render() {
    const members = this.props.capstone.members
    return (
      <div className='capstone-card' 
          onClick={() => {this.props.showProjInfo(this.props.capstone.name)}}
      >
        <div className='capstone-card-image'
          style={{backgroundImage: `url(${this.state.url})`}}/>
        <div className='capstone-card-content'>
          <h1>{this.props.capstone.name}</h1>
          <p>{
            members.map((m, key) => <span key={key}>{m.name}{key!=members.length-1 && " / "}</span>)
          }</p>
        </div>
      </div>
    );
  }
}