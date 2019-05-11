import React, { Component } from 'react';
import {SiteConsumer} from './SiteContext'
import StudentCard from './StudentCard'
import '../styles/students.scss';

class Students extends Component {

  render() {
    return (
        <div className="students container">
          <span className="students-title">Students</span>
          <div className="students-cards-container">
            {this.props.data&&
              this.props.data.map((student, key) => (
                <StudentCard showStudentInfo={this.props.showStudentInfo} student={student} key={key} assets={this.props.assets}/>
              ))
            }
          </div>
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
