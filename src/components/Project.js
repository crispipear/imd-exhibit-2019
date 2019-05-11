import React, { Component } from 'react';
import { SiteConsumer } from './SiteContext';
import '../styles/project.scss';

class Project extends Component {
  state = {
    project: {},
    hover: false,
    loaded: false
  }

  _onLoad = () =>{
    this.setState({
      loaded: true
    })
  }

  componentWillReceiveProps(nextProps) {
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
        <span className='close-button' onClick={this.props.closeProjInfo}>&times;</span>
        <div className='container'>
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
    {({ students, projects, closeProjInfo, projInfo, curProj}) => (
      <Project students={students} projects={projects} curProj={curProj}
      closeProjInfo={closeProjInfo} projInfo={projInfo}
    /> 
    )}
  </SiteConsumer>
)
