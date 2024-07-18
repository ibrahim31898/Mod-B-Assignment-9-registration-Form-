/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import StudentList from './components/StudentList';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div className="app">
      <h1>Registration Form</h1>
      <RegistrationForm addStudent={addStudent} />
      <h2>Registered Students</h2>
      <StudentList students={students} />
    </div>
  );
};

export default App;
