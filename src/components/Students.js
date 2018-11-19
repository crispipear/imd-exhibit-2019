import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import {fetchData} from '../utils/fetchData'
import StudentCard from './StudentCard'

class Students extends Component {

  componentDidMount(){
    this.fetchStudentsData()
  }

  fetchStudentsData = async () => {
    const data = await fetchData('students')
    this.props.updateData('students', data)
  }

  render() {
    return (
        <div className="students">
          {this.props.data&&
            this.props.data.map((student, key) => (
              <StudentCard name={student.name} key={key}/>
            ))
          }
        </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({students, updateData}) => (
      <Students data={students} updateData={updateData}/>
    )}
  </SiteConsumer>
)
