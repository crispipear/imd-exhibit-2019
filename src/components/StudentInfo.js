import React, { Component } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/studentInfo.scss';

class StudentInfo extends Component {
  state = {
    student: {},
    hover: false
  }
  _handleHover = () => {
    this.setState({ hover: true })
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  _handleClick = e => {
    let inInfoSpace = e.nativeEvent.path.some(p => p.className == 'student-info')
    if (this.props.studentInfo && !inInfoSpace) {
      this.props.closeStudentInfo()
    }
  }
  componentWillReceiveProps(nextProps) {
    let student = nextProps.students.find(s => s.name == nextProps.curStudent) || {}
    this.setState({
      student
    })
  }

  render() {
    return (
      <div className='student-info-container' onClick={(e) => this._handleClick(e)}
        style={{
          pointerEvents: this.props.studentInfo ? 'all' : 'none',
          backgroundColor: this.props.studentInfo ? 'rgba(0,0,0, 0.8)' : 'transparent'
        }}
      >
        {
          this.props.browser.width <= 1023 &&
          <div className='student-info'
            style={{ right: this.props.studentInfo ? 0 : '-100%' }}
          > 
            <span className='close-button' onClick={this.props.closeStudentInfo}>&times;</span>
            <div className='student-info-portrait'>
              <div className='overlay1'
                style={{ backgroundColor: this.state.student.favoriteColor, opacity: this.state.hover ? 1 : 0 }}
              />
              <div className='portrait'
                style={{ backgroundImage: `url(${this.props.assets.sample_portrait})` }} />
            </div>

            <h1>{this.state.student.name}</h1>
            <p className='focus'>— {this.state.student.focus}</p>
            <p>{this.state.student.bio}</p>
            <div className='links'>
              <a target="_blank" rel="noopener noreferrer" href={this.state.student.portfolio}>portfolio</a>
              <a target="_blank" rel="noopener noreferrer" href={this.state.student.linkedin}>linkedin</a>
              <a href={'mailto:' + this.state.student.email}>email</a>
            </div>
            <div className='student-info-fav'>
              <h3>Favorite drink</h3>
              <h4>{this.state.student.favoriteDrink}</h4>
            </div>
            <div className='student-info-fav'
              style={{ cursor: 'pointer' }}
              onMouseEnter={this._handleHover}
              onMouseLeave={this._handleMouseLeave}
            >
              <h3>Favorite color</h3>
              <h4>
                <div style={{ backgroundColor: this.state.student.favoriteColor }} />
                <span style={{ textDecoration: 'underline', textTransform: 'lowercase', opacity: this.state.hover ? 0.5 : 1 }}>{this.state.student.favoriteColor}</span>
              </h4>
            </div>
          </div>
        }
        {
          this.props.browser.width > 1023 &&
          <div className='student-info'
            style={{ right: this.props.studentInfo ? 0 : '-60%' }}
          >
            <div className='left'>
              <div className='student-info-portrait'>
                <div className='overlay1'
                  style={{ backgroundColor: this.state.student.favoriteColor, opacity: this.state.hover ? 1 : 0 }}
                />
                <div className='portrait'
                  style={{ backgroundImage: `url(${this.props.assets.sample_portrait})` }} />
              </div>
              <div className='student-info-fav'>
                <h3>Favorite drink</h3>
                <h4>{this.state.student.favoriteDrink}</h4>
              </div>
              <div className='student-info-fav'
                style={{ cursor: 'pointer' }}
                onMouseEnter={this._handleHover}
                onMouseLeave={this._handleMouseLeave}
              >
                <h3>Favorite color</h3>
                <h4><span style={{ textDecoration: 'underline', textTransform: 'lowercase', opacity: this.state.hover ? 0.5 : 1 }}>{this.state.student.favoriteColor}</span>
                  <div style={{ backgroundColor: this.state.student.favoriteColor }} />
                </h4>
              </div>
            </div>
            <div className='right'>
              <h1>{this.state.student.name}</h1>
              <p className='focus'>— {this.state.student.focus}</p>
              <p>{this.state.student.bio}</p>
              <div className='links'>
                <a target="_blank" rel="noopener noreferrer" href={this.state.student.portfolio}>portfolio</a>
                <a target="_blank" rel="noopener noreferrer" href={this.state.student.linkedin}>linkedin</a>
                <a href={'mailto:' + this.state.student.email}>email</a>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({ students, assets, studentInfo, closeStudentInfo, curStudent, browser }) => (
      <StudentInfo students={students} assets={assets} studentInfo={studentInfo}
        closeStudentInfo={closeStudentInfo} curStudent={curStudent} browser={browser} />
    )}
  </SiteConsumer>
)
