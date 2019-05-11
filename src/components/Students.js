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
                <StudentCard showStudentInfo={this.props.showStudentInfo} 
                              student={student} key={key} assets={this.props.assets}
                              clicked={this.props.studentInfo}
                              curStudent={this.props.curStudent}
                />
              ))
            }
          </div>
        </div>
    );
  }
}

export default () => (
  <SiteConsumer>
    {({students, assets, showStudentInfo, studentInfo, curStudent}) => (
      <Students data={students} assets={assets} curStudent={curStudent}
       showStudentInfo={showStudentInfo} studentInfo={studentInfo}/>
    )}
  </SiteConsumer>
)
