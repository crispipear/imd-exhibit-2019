import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext';
import '../styles/studentInfo.scss';

class StudentInfo extends Component {
  state = {
    student: {}
  }
  
  _handleClick = e => {
    let inInfoSpace = e.nativeEvent.path.some(p => p.className == 'student-info')
    if(this.props.studentInfo && !inInfoSpace){
      this.props.closeStudentInfo()
    }
  }
  componentWillReceiveProps(nextProps){
    let student = nextProps.students.find(s => s.name == nextProps.curStudent) || {}
    this.setState({
      student
    }, ()=>{console.log(this.state.student)})
  }
  render() {
    return (
      <div className='student-info-container' onClick={(e) => this._handleClick(e)} 
      style={{pointerEvents: this.props.studentInfo ? 'all' : 'none', 
              backgroundColor: this.props.studentInfo ? 'rgba(0,0,0, 0.8)' : 'transparent'
            }}>
        <div className='student-info' 
              style={{right: this.props.studentInfo ? 0 : '-50%'
              }}>
          <div className='left'>
            <div className='student-info-portrait'
                style={{backgroundImage: `url(${this.props.assets.sample_portrait})`}}
            />
            <h3>Favorite drink</h3>
            <h4>{this.state.student.favoriteDrink}</h4>
            <h3>Favorite color</h3>
            <h4>{this.state.student.favoriteColor}</h4>
          </div>
          <div className='right'>
                <h1>{this.state.student.name}</h1>
                <p className='focus'>Focus - {this.state.student.focus}</p>
                <p>{this.state.student.bio}</p>
                <div className='links'>
                  <a target="_blank" rel="noopener noreferrer" href={this.state.student.portfolio}>portfolio</a>
                  <a target="_blank" rel="noopener noreferrer" href={this.state.student.linkedin}>linkedin</a>
                  <a href={'mailto:'+this.state.student.email}>email</a>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({students, assets, studentInfo, closeStudentInfo, curStudent}) => (
      <StudentInfo students={students} assets={assets} studentInfo={studentInfo}
        closeStudentInfo={closeStudentInfo} curStudent={curStudent}/>
    )}
  </SiteConsumer>
)
