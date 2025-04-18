import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (firstName === '') {
      alert('Please provide your name!');
      return;
    }
  };

  return (
    <div>
      <form name="fm1" onSubmit={handleFormSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;