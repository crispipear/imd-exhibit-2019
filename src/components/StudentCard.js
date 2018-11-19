import React, { Component } from 'react';
import '../styles/students.css';

const StudentCard = ({name}) => (
  <div className='student-card'>
    <h1>{name}</h1>
  </div>
)

export default StudentCard
