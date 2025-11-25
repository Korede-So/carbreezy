import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css'
import myImage from './myImage.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    budgetRange: '',
    vehicleType: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData);
      alert('Your request was submitted!');
    } catch (err) {
      alert('Error submitting form.');
    }
  };
  return (
    <>
    <div >
    <div>
        <h1>Contact Us</h1>
        <p className='sub'>If you have any queries, get in touch today! <br /> Don't hesitate. <br />We try to take the extra step for our customer satisfaction.</p>
    </div>
    <div className='bod'>
        <div className='image'><img src={myImage} alt='Contact Illustration' /></div>
        <div className='contact-form'>
        <form onSubmit={handleSubmit}>
        <p>Fisrt Name*</p>  
      <input className='fname' name="firstName" placeholder="First Name" onChange={handleChange} />
      <p> Last Name*</p>
      <input className='lname' name="lastName" placeholder="Last Name" onChange={handleChange} />
      <p>Email*</p>
      <input className='email' type="email" name="email" placeholder="Email" onChange={handleChange} />
      <p>Budget Range*</p>
      <input className='budget' name="budgetRange" placeholder="Budget Range (e.g. 5,000 -100,000)" onChange={handleChange} />
      <p>Preferred Vehicle Type</p>
      <input className='vehicle' name="vehicleType" placeholder="Preferred Vehicle Type" onChange={handleChange} />
      Additional Information
    <textarea className='information' name="message" placeholder="Additional Information or Request" onChange={handleChange} />
    <button type="submit">Send</button>
    </form>
    
    </div>
    </div>
    </div>
    </>
  );
}
export default ContactUs;