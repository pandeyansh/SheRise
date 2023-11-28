import React, { useState } from 'react';
import './RegisterForm.css';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    university: '',
    stream: '',
    passingYear: '',
    country: '',
    githubId: '',
    linkedinId: '',
    description: '',
    profession: '',
  });
  const [errors, setErrors] = useState({});
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters one uppercase lowercase letter, one special character and one digit.';
    }
    if (!formData.university) {
      newErrors.university = 'University is required';
    }
    if (!formData.stream) {
      newErrors.stream = 'Stream is required';
    }
    if (!formData.passingYear) {
      newErrors.passingYear = 'Passing Year is required';
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    if (!formData.githubId) {
      newErrors.githubId = 'GitHub ID is required';
    }
    if (!formData.linkedinId) {
      newErrors.linkedinId = 'LinkedIn ID is required';
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    if (!formData.profession) {
      newErrors.profession = 'Profession is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        university: '',
        stream: '',
        passingYear: '',
        country: '',
        githubId: '',
        linkedinId: '',
        description: '',
        profession: '',
      });
      setErrors({});
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: undefined,
    });
    console.log(name, "value", name)
  };
  return (
    <header>
      <a className='Home-link' href='/'>
          <img className='reg-logo'
            src="https://sherise.vercel.app/static/media/logo.de65ad16d0c1c7071226bec80fbe99a4.svg"
            alt="SheRise Logo"
            style={{ height: '60px', marginRight: '10px', margin: '2%'}}
          />
        </a>
    <div className='reg-main-h'>
      <h1>Register</h1>
      <div className='register-container'>
        <div className='register-h'>
          <div className='reg-form-container'>
            <form className='reg-main-form' onSubmit={handleSubmit}>
              <div className='register-name'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name*'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className='error'>{errors.firstName}</span>}
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name*'
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className='error'>{errors.lastName}</span>}
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email*'
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className='error'>{errors.email}</span>}
              <input
                type='password'
                name='password'
                placeholder='Password*'
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <span className='error'>{errors.password}</span>}
              <input
                type='text'
                name='university'
                placeholder='Your University*'
                value={formData.university}
                onChange={handleInputChange}
              />
              {errors.university && <span className='error'>{errors.university}</span>}
              <input
                type='text'
                name='stream'
                placeholder='Stream*'
                value={formData.stream}
                onChange={handleInputChange}
              />
              {errors.stream && <span className='error'>{errors.stream}</span>}
              <input
                type='text'
                name='passingYear'
                placeholder='Passing Year*'
                value={formData.passingYear}
                onChange={handleInputChange}
              />
              {errors.passingYear && <span className='error'>{errors.passingYear}</span>}
              <input
                type='text'
                name='country'
                placeholder='Country*'
                value={formData.country}
                onChange={handleInputChange}
              />
              {errors.country && <span className='error'>{errors.country}</span>}
              <div className='register-social'>
                <div className='register-social-upper'>
                  <input
                    type='text'
                    name='githubId'
                    placeholder='GitHub ID*'
                    value={formData.githubId}
                    onChange={handleInputChange}
                  />
                  {errors.githubId && <span className='error'>{errors.githubId}</span>}
                  <input
                    type='text'
                    name='linkedinId'
                    placeholder='LinkedIn ID*'
                    value={formData.linkedinId}
                    onChange={handleInputChange}
                  />
                  {errors.linkedinId && <span className='error'>{errors.linkedinId}</span>}
                </div>
              </div>
              <textarea
                className='reg-textarea'
                name='description'
                placeholder='Describe yourself must be at lest 10 words*'
                value={formData.description}
                onChange={handleInputChange}>
              </textarea>
              {errors.description && <span className='error'>{errors.description}</span>}
              <select
                className='reg-select'
                title='profession'
                name='profession'
                id='membership'
                value={formData.profession}
                onChange={handleInputChange} >
                <option value='' disabled>Select Profession</option>
                <option value='student'>Student</option>
                <option value='frontend'>Frontend Developer</option>
                <option value='backend'>Backend Developer</option>
                <option value='fullstack'>Full-Stack Developer</option>
                <option value='designer'>UI/UX Designer</option>
                <option value='influencer'>Influencer</option>
                <option value='content-writer'>Content Writer</option>
              </select>
              {errors.profession && <span className='error'>{errors.profession}</span>}
              <button className='register-button' type='submit'>Register</button>
            </form>
            <div className='register-desc'>
              <p>Already have an account?</p>
              <a className='login-link' href='/login'><p>Login*</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};
export default RegisterForm;