/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <h3>{student.firstName} {student.lastName}</h3>
          <p>Email: {student.email}</p>
          <p>Organization: {student.organizationName}</p>
          <p>Size: {student.organizationSize}</p>
          <p>Industry: {student.industry}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
