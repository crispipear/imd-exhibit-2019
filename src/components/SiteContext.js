import React, {Component} from 'react';
import {fetchData, fetchAssets} from '../utils/fetchData';

const SiteContext = React.createContext({
  students: undefined,
  projects: undefined,
  siteContent: undefined,
  assets: undefined
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  componentDidMount(){
    this._fetchData();
  }

  state = {
    students: [],
    projects: [],
    siteContent: {},
    assets: {}
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
          assets: this.state.assets
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
