import React, { Component } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/studentInfo.scss';
import { ReactComponent as Assets } from '../assets/patterns.svg';
import { ReactComponent as AssetsMobile } from '../assets/patterns_mobile.svg';
import { scrollTo } from '../utils/scroll';

class StudentInfo extends Component {
  state = {
    student: {},
    hover: false,
    clicked: false,
    clickedPic: false
  }
  _handleHover = () => {
    this.setState({ hover: true })
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  _handleClick = e => {
    if (this.props.browser.width > 1023) {
      let inInfoSpace = e.nativeEvent.path.some(p => p.className == 'student-info')
      if (this.props.studentInfo && !inInfoSpace) {
        this._close()
      }
    }
  }

  _close = () => {
    this.props.closeStudentInfo()
    this.setState({
      clicked: false,
      hover: false
    })
    if (this.props.browser.width <= 1023) {
      scrollTo(this.props.curPos, 0)
    }
  }

  _colorClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      clickedPic: !this.state.clicked
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.curStudent !== this.props.curStudent) {
      let student = nextProps.students.find(s => s.name == nextProps.curStudent) || {}
      this.setState({
        student,
        clicked: false,
        clickedPic: false
      })
    }
  }

  render() {
    return (
      <div className='student-info-container' onClick={(e) => this._handleClick(e)}
        style={{
          pointerEvents: this.props.studentInfo ? 'all' : 'none',
          opacity: this.props.studentInfo ? 1 : 0
        }}
      >
        {
          this.props.browser.width <= 1023 &&
          <div className='student-info'
            style={{ right: this.props.studentInfo ? 0 : '-100%' }}
          >
            <span className='close-button' onClick={this._close}>&times;</span>
            <AssetsMobile className="student-info-overlay" style={{ opacity: this.state.clicked ? 1 : 0, fill: this.state.student.favoriteColor }} />
            <div className='student-info-portrait' onClick={() => this.setState({ clickedPic: !this.state.clickedPic, clicked: false })}>
              <div className='portrait'
                style={{
                  backgroundImage: `url(${this.state.student.portraitAlt})`,
                  zIndex: 2,
                  opacity: this.state.clickedPic ? 1 : 0
                }} />
              <div className='portrait'
                style={{ backgroundImage: `url(${this.state.student.portrait})` }} />
            </div>

            <h1>{this.state.student.name}</h1>
            <p className='focus'>{this.state.student.focus}</p>
            {
              this.state.student.bio &&
              this.state.student.bio.split("//").map((paragraph, key) =>
                <p key={key}>
                  {paragraph}
                </p>
              )
            }
            <div className='links'>
              {this.state.student.portfolio && <a target="_blank" rel="noopener noreferrer" href={this.state.student.portfolio}>website</a>}
              {this.state.student.linkedin && <a target="_blank" rel="noopener noreferrer" href={this.state.student.linkedin}>linkedin</a>}
              <a href={'mailto:' + this.state.student.email}>email</a>
            </div>
            <div className='student-info-fav'>
              <h3>Favorite drink</h3>
              <h4>{this.state.student.favoriteDrink}</h4>
            </div>
            <div className='student-info-fav'
              onClick={this._colorClick}
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
            <Assets className="student-info-overlay" style={{ opacity: this.state.hover ? 1 : 0, fill: this.state.student.favoriteColor }} />
            <div className='left'>
              <div className='student-info-portrait' onMouseEnter={this._handleHover}
                onMouseLeave={this._handleMouseLeave}>
                <div className='portrait'
                  style={{
                    backgroundImage: `url(${this.state.student.portraitAlt})`,
                    zIndex: 2,
                    opacity: this.state.hover ? 1 : 0
                  }} />
                <div className='portrait'
                  style={{ backgroundImage: `url(${this.state.student.portrait})` }} />
              </div>
              <div className='student-info-fav'>
                <h3>Favorite drink</h3>
                <h4>{this.state.student.favoriteDrink}</h4>
              </div>
              <div className='student-info-fav'
              >
                <h3>Favorite color</h3>
                <h4 onMouseEnter={this._handleHover}
                  onMouseLeave={this._handleMouseLeave}
                  style={{cursor: 'pointer'}}

                ><span style={{ textDecoration: 'underline', textTransform: 'lowercase', opacity: this.state.hover ? 0.5 : 1 }}>{this.state.student.favoriteColor}</span>
                  <div style={{ backgroundColor: this.state.student.favoriteColor }} />
                </h4>
              </div>
              <div className='links'>
                {this.state.student.portfolio && <a target="_blank" rel="noopener noreferrer" href={this.state.student.portfolio}>website</a>}
                {this.state.student.linkedin && <a target="_blank" rel="noopener noreferrer" href={this.state.student.linkedin}>linkedin</a>}
                <a href={'mailto:' + this.state.student.email}>email</a>
              </div>
            </div>
            <div className='right'>
              <h1>{this.state.student.name}</h1>
              <p className='focus'>{this.state.student.focus}</p>
              {
                this.state.student.bio &&
                this.state.student.bio.split("//").map((paragraph, key) =>
                  <p key={key}>
                    {paragraph}
                  </p>
                )
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({ students, studentInfo, closeStudentInfo, curStudent, browser, curPos }) => (
      <StudentInfo students={students} studentInfo={studentInfo}
        closeStudentInfo={closeStudentInfo} curStudent={curStudent} browser={browser}
        curPos={curPos}
      />
    )}
  </SiteConsumer>
)
