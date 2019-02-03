import React, {Component} from 'react';
import {fetchData} from '../utils/fetchData';

const SiteContext = React.createContext({
  students: undefined,
  projects: undefined,
  siteContent: undefined
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  componentDidMount(){
    this._fetchData();
  }

  state = {
    students: undefined,
    projects: undefined,
    siteContent: undefined
  }

  _fetchData = async () => {
    const siteContentdata = await fetchData('siteContent');
    this._processSiteContent(siteContentdata);
    const studentsData = await fetchData('students');
    this.setState({
      students: studentsData.sort(this._compare),
    })
  }

  _processSiteContent = data => {
    let siteContent = {}
    data.map(obj => {
      siteContent[obj.name] = obj.content
    })
    this.setState({
      siteContent
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
          siteContent: this.state.siteContent
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
