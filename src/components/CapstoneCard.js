import React, { Component } from 'react';

export default class StudentCard extends Component {
  state = {
    width: 0,
    height: 0,
    url: '',
    teamMembers: []
  }
  componentDidMount(){
    let image = this.props.capstone.featuredImage.fields.file
    let width,height = 0
    let url = 'https://' + image.url
    let teamMembers = this.props.capstone.teamMembers.split(",")
    if(image.details.image.width > image.details.image.height){
      width = '35.65vw'
      height = '25vw'
    }else{
      width = '25vw'
      height = '35.65vw'
    }
    this.setState({
      width,
      height,
      url,
      teamMembers
    })
  }

  render() {
    return (
      <div className='capstone-card' style={{width: this.state.width, height: this.state.height}}>
        <div className='capstone-image'
          style={{backgroundImage: `url(${this.state.url})`}}/>
        <h1>{this.props.capstone.name}</h1>
        <p>{
          this.state.teamMembers.map((m, key) => <span key={key}>{m}{key!=this.state.teamMembers.length-1 && " / "}</span>)
        }</p>
      </div>
    );
  }
}