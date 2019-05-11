import React, { Component } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/project.scss';
import { scrollTo } from '../utils/scroll';

class Project extends Component {
  state = {
    project: {},
    hover: false,
    loaded: false,
  }

  _onLoad = () =>{
    this.setState({
      loaded: true
    })
  }

  _close = () => {
    if(this.props.browser.width <= 1023){
      scrollTo(this.props.curPos, 0)
    }
    this.props.closeProjInfo()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.projInfo == true){
      document.getElementsByClassName("app")[0].style.position = 'fixed';
      document.getElementsByClassName("app")[0].style.overflow = 'hidden';
    }else if(nextProps.projInfo == false){
      document.getElementsByClassName("app")[0].style.position = 'unset';
      document.getElementsByClassName("app")[0].style.overflow = 'auto';
    }
    if(nextProps.curProj !== this.props.curProj && nextProps.curProj !== null){
        let project = nextProps.projects.find(s => s.name == nextProps.curProj)
        if(project){
          console.log(project)
            // project.members.map(member => {
                //add picture links in
                // member.link = ''
            // })
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
      >
        <div className='container'>
        <span className='close-button' onClick={this._close}>&times;</span>
            <div className='header'>
                <div className='project-info'>
                    <h1>{project.name}</h1>
                    <div className='project-members-container'>
                        {
                            project.members && 
                            project.members.map((member, key) =>
                                <div className='project-member' key={key}>
                                    <div className='project-member-pic'/>
                                    <h3>{member.name}</h3>
                                </div>
                            )
                        }
                    </div>
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
                {
                  project.featuredImage &&
                  <div className='project-featured' style={{backgroundImage: `url(https:${project.featuredImage.fields.file.url})`}}/>
                }
            </div>
            <div className='content'>
                {
                    project.videoLink &&
                    <div className="block-video">
                      {
                        !this.state.loaded &&
                        <div className="block-video-load">
                          <h3>loading video</h3>
                        </div>
                      }
                      <iframe src={project.videoLink} onLoad={this._onLoad}
                    frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}/>
                    </div>
                }
                {
                  project.images &&
                  project.images.map((image, key) =>
                    <img key={key} className='project-image' src={`https:${image.fields.file.url}`}/>                  
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
    {({ students, projects, closeProjInfo, projInfo, curProj, curPos, browser}) => (
      <Project students={students} projects={projects} curProj={curProj}
      closeProjInfo={closeProjInfo} projInfo={projInfo} curPos={curPos}
      browser={browser}
    /> 
    )}
  </SiteConsumer>
)
