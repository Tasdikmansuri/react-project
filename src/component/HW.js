
import React, { useState } from 'react';




const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email is empty
    if (!email.trim()) {
      setError('Please enter an email address');
      return;
    }

    // Check if the email is valid using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Reset error if there are no issues
    setError('');

    // Handle further processing, e.g., submit the form
    console.log('Email submitted:', email);
  };

  return (
    
      <form onSubmit={handleSubmit} className="form-container">
    
          <input className='input-email' type="email" placeholder="Email address" />
       
     
      <button className='item11'> > </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default EmailForm;


    




// ./anotherFile.js






//export {
  //HelloworldFromp,
  //HelloworldFromSpan,
  //HelloworldFromDiv,

//}

//export default HelloworldFromP

//import {HelloworldFromP} from 'HW'
