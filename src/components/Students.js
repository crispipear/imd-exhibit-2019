import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import StudentCard from './StudentCard'
import '../styles/students.scss';

class Students extends Component {

  render() {
    return (
        <div className="students">
          {this.props.data&&
            this.props.data.map((student, key) => (
              <StudentCard showStudentInfo={this.props.showStudentInfo} name={student.name} key={key} assets={this.props.assets}/>
            ))
          }
        </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({students, assets, showStudentInfo}) => (
      <Students data={students} assets={assets} showStudentInfo={showStudentInfo}/>
    )}
  </SiteConsumer>
)
