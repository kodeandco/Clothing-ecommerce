import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    identifier: '', 
    password: ''
  });

  const handleChange  = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent page refresh

  console.log('Form submitted:', formData);

  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert(`Signup failed: ${data.message}`);
    }
  } catch (error) {
    console.error('Error during signup:', error);
    alert('Something went wrong. Please try again later.');
  }
};


  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Phone Number:</label><br />
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
