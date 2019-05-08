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
  closeStudentInfo: undefined
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
    studentInfo: false,
    browser: {width: 0, height: 0}
  }

  showStudentInfo = name => {
    this.setState({
      curStudent: name,
      studentInfo: true
    })
  }

  closeStudentInfo = () => {
    this.setState({
      studentInfo: false
    })
  }

  _fetchData = async () => {
    const siteContentdata = await fetchData('siteContent');
    this._processContent(siteContentdata);
    const siteAssetsData = await fetchAssets();
    this._processAssets(siteAssetsData);
    const studentsData = await fetchData('students');
    const projectsData = await fetchData('projects');
    this.setState({
      students: studentsData.sort(this._compare),
      projects: projectsData
    })
  }

  _processAssets = data => {
    let assets = {}
    data.map(obj => {
      assets[obj.title] = `https://${obj.file.url}`
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

  _compare = (a, b) => {
    let aLastName = a.lastName
    let bLastName = b.lastName

    if(aLastName < bLastName) return -1
    if(aLastName > bLastName) return 1

    return 0
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
          curStudent: this.state.curStudent,
          studentInfo: this.state.studentInfo,
          browser: this.state.browser
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}