/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizationName: '',
    organizationSize: '',
    industry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organizationName: '',
      organizationSize: '',
      industry: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="text" name="organizationName" placeholder="Organization Name" value={formData.organizationName} onChange={handleChange} required />
      <select name="organizationSize" value={formData.organizationSize} onChange={handleChange} required>
        <option value="" disabled>-- Select Organization Size --</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <select name="industry" value={formData.industry} onChange={handleChange} required>
        <option value="" disabled>-- Select Industry --</option>
        <option value="Technology">Technology</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        {/* Add more options as needed */}
      </select>
      <button type="submit">Start Free Trial</button>
    </form>
  );
};

export default RegistrationForm;
