import React, {Component} from 'react'

const SiteContext = React.createContext({
  students: undefined,
  projects: undefined,
  updateData: () => null
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  state = {
    students: undefined,
    projects: undefined
  }

  updateData = (type, data) =>{
      this.setState({
        [type]: data.sort(this._compare)
      })
  }

  _compare = (a, b) => {
    let nameA = a.name.split(" ")
    let nameB = b.name.split(" ")
    let aLastName = nameA[nameA.length - 1]
    let bLastName = nameB[nameB.length - 2]

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
          updateData: this.updateData
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
