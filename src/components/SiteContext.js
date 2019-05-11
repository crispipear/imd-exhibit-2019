import React, {Component} from 'react';
import {fetchData, fetchAssets} from '../utils/fetchData';

const SiteContext = React.createContext({
  students: undefined,
  projects: undefined,
  siteContent: undefined,
  assets: undefined,
  showStudentInfo: undefined,
  curStudent: undefined,
  studentInfo: undefined,
  closeStudentInfo: undefined,
  closeProjInfo: undefined,
  updateCurPos: undefined
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  updateDimensions = () => {
      this.setState({browser: {width: window.innerWidth, height: window.innerHeight}});
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
      this._fetchData();
      this.updateDimensions();
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  state = {
    students: [],
    projects: [],
    siteContent: {},
    assets: {},
    curStudent: "",
    curProj: "",
    studentInfo: false,
    projInfo: false,
    browser: {width: 0, height: 0},
    curPos: 0
  }

  showStudentInfo = name => {
    this.setState({
      curStudent: name,
      studentInfo: true
    })
    this._updateCurPos()
  }

  showProjInfo = name => {
    this.setState({
      curProj: name,
      projInfo: true
    })
    this._updateCurPos()
  }

  closeProjInfo = () =>{
    this.setState({
      curProj: null,
      projInfo: false
    })
  }
  closeStudentInfo = () => {
    this.setState({
      studentInfo: false
    })
  }

  _updateCurPos = () =>{
    if (this.state.browser.width <= 1023){
      this.setState({
        curPos: window.scrollY
      })
    }
  }

  _fetchData = async () => {
    const siteContentdata = await fetchData('siteContent');
    this._processContent(siteContentdata);
    const siteAssetsData = await fetchAssets();
    this._processAssets(siteAssetsData);
    const studentsData = await fetchData('students');
    this._processStudentsData(studentsData);
    const projectsData = await fetchData('projects');
    this.setState({
      projects: projectsData.sort((a, b) => {
        let aName = a.name
        let bName = b.name
    
        if(aName < bName) return -1
        if(aName > bName) return 1
    
        return 0
      })
    })
  }

  _processStudentsData = data => {
    data.map(student => {
      if(student.portrait){
        student.portrait = `https:${student.portrait.fields.file.url}`
      }else{
        student.portrait = this.state.assets.sample_portrait
      }
      if(student.portraitAlt){
        student.portraitAlt = `https:${student.portraitAlt.fields.file.url}`
      }else{
        student.portraitAlt = this.state.assets.test
      }
    })
    this.setState({
      students: data.sort((a, b) => {
        let aLastName = a.lastName
        let bLastName = b.lastName
    
        if(aLastName < bLastName) return -1
        if(aLastName > bLastName) return 1
    
        return 0
      })
    })
  }


  _processAssets = data => {
    let assets = {}
    data.map(obj => {
      assets[obj.title] = `https:${obj.file.url}`
    })
    this.setState({
      assets
    })
  }

  _processContent = data => {
    let content = {}
    data.map(obj => {
      content[obj.name] = obj.content
    })
    this.setState({
      siteContent: content
    })
  }
  render(){
    return(
      <SiteContext.Provider
        value={{
          students: this.state.students,
          projects: this.state.projects,
          siteContent: this.state.siteContent,
          assets: this.state.assets,
          showStudentInfo: this.showStudentInfo,
          closeStudentInfo: this.closeStudentInfo,
          showProjInfo: this.showProjInfo,
          closeProjInfo: this.closeProjInfo,
          curStudent: this.state.curStudent,
          curProj: this.state.curProj,
          studentInfo: this.state.studentInfo,
          projInfo: this.state.projInfo,
          browser: this.state.browser,
          curPos: this.state.curPos
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
