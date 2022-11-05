import React from 'react';
import './Contact.css';
import contactImg from './Images/about1.jpg';

function Contact() {
  return (
    <div className='contact component__space' id='Contact'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact_box'>
                    <div className='contact_meta'>
                        <h1 className='contact_text'>Get in Touch...</h1>
                        <p className='contact_text white'>Please fill out the quick form and I will in touch with lightining speed.</p>
                        <p className='contact_text white'> Mob :<strong>+91 9575436689</strong></p>
                        <p className='contact_text white'>Email: <strong> varulchourasia180@gmail;.com</strong></p>
                    </div>
                    <div className='input_box'>
                        <input type='name' className='contact name' placeholder='Enter your name...'/>    
                        <input type='email' className='contact email' placeholder='Enter your email id...'/>    
                          
                        <textarea name='message' id='message' placeholder='Write your message...' /> 
                        <button className='btn contact pointer' type='submit'>Submit</button> 
                    </div>    
                </div>    
            </div>    
            <div className='col__2'>
                <img src={contactImg} className='contact_img' />
            </div>
        </div>       
      
    </div>
  )
}

export default Contact;
