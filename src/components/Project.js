import React, { Component, createRef } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/project.scss';
import { scrollTo } from '../utils/scroll';

class Project extends Component {

  constructor(props){
    super(props);
    this.videoRef = createRef();
    this.modalRef = createRef();
  }

  state = {
    project: {},
    hover: false,
    loaded: false,
  }

  _onLoad = () => {
    this.setState({
      loaded: true
    })
  }

  _close = () => {
    if (this.props.browser.width <= 1023) {
      scrollTo(this.props.curPos, 0)
    }
    this.props.closeProjInfo();
    this.videoRef.current.src = this.state.project.videoLink; //stops video
  }

  componentWillReceiveProps(nextProps) {
    this.modalRef.current.scrollTop = 0;
    this.setState({
      loaded: false
    })
    if (nextProps.curProj !== this.props.curProj && nextProps.curProj !== null) {
      let project = nextProps.projects.find(p => p.name == nextProps.curProj)
      if (project) {
        project.members.map(member => {
          let student = nextProps.students.find(s => s.name == member.name)
          member.pic = student.portrait
        })
        this.setState({
          project
        })
      }
    }
  }


  render() {
    const project = this.state.project
    return (
      <div className='project'
        style={{
          pointerEvents: this.props.projInfo ? 'all' : 'none',
          opacity: this.props.projInfo ? 1 : 0
        }}
        ref={this.modalRef}
      >
        <div className='container'>
          <span className='close-button' onClick={this._close}>&times;</span>
          <div className='header'>
            <div className='project-info'>
              <h1>{project.name}</h1>
              <div className='project-info-content'>
              <div>
                  {
                  project.featuredImage && <img src={project.featuredImage.fields.file.url}/>
                  }
                  {
                  project.description &&
                  project.description.split("//").map((paragraph, key) =>
                    <p key={key}>{paragraph}</p>
                  )
                }
                {
                  project.websiteLink &&
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" >
                    {project.websiteLink}
                  </a>
                } 
              </div>
              <div className='project-members-container'>
                <h4>Team Members</h4>
                <div/>
                {
                  project.members &&
                  project.members.map((member, key) =>
                    <div className='project-member' key={key}>
                      <div>
                        <div className='project-member-pic' style={{backgroundImage: `url(${member.pic})`}} />
                      </div>
                      <h3>{member.name}</h3>
                    </div>
                  )
                }
              </div>
              </div>
            </div>
          </div>
          <div className='content'>
              <div className="block-video">
                {
                  !this.state.loaded &&
                  <div className="block-video-load">
                    <h3>loading video</h3>
                  </div>
                }
                <iframe ref={this.videoRef} src={project.videoLink} onLoad={this._onLoad}
                  frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} />
              </div>
            {
              project.images &&
              project.images.map((image, key) =>
                <img key={key} className='project-image' src={`https:${image.fields.file.url}`} />
              )
            }

          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({ students, projects, closeProjInfo, projInfo, curProj, curPos, browser }) => (
      <Project projects={projects} curProj={curProj} students={students}
        closeProjInfo={closeProjInfo} projInfo={projInfo} curPos={curPos}
        browser={browser}
      />
    )}
  </SiteConsumer>
)
