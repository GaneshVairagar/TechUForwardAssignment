import React, { useState } from 'react';
import './Forms.css';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    UserName: '',
    Language: '',
    stdin: '',
    SourceCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addRegister', formData);
      console.log(response.data);
      
    } catch (error) {
      console.error('Registration failed:', error);
      
    }
  };

  return (
    <>
      <div className='header'>
        <h1 className='header1'>Welcome To Tech U Forward</h1>
      </div>

      <form className='container' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Submit Code Snippet..!</legend>

          <div className='form-group'>
            <label>UserName -: </label>
            <input type='text' name='UserName' placeholder='Enter Name' id='name' required value={formData.UserName} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label>Prefferred Coding Language -: </label>
            <select id='language' name='Language' required value={formData.Language} onChange={handleChange}>
              <option value="">Select Option</option>
              <option value="C">C Programming</option>
              <option value="C++">C++</option>
              <option value="Java">Java Programming</option>
              <option value="Python">Python Programming</option>
              <option value="Javascript">Javascript Programming</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Standard input(stdin) -:  </label>
            <textarea id='stdin' name='stdin' required value={formData.stdin} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label>SourceCode -: </label>
            <textarea type='text' name='SourceCode' id='sourceCode' required value={formData.SourceCode} onChange={handleChange} />
          </div>

          <div className='form-group'> <button type='submit' value="Submit"> Submit </button> </div>
        </fieldset>
      </form>
    </>
  );
};

export default RegistrationForm;
