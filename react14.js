import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (allNumeric(age)) {
      alert('Your Registration number has been accepted....');
      // You can perform additional actions with the valid age here
    } else {
      alert('Age must be a 2-digit number');
    }
  };

  const allNumeric = (inputValue) => {
    const numericPattern = /^\d{2}$/;
    return inputValue.match(numericPattern);
  };

  return (
    <div>
      <form name="fm1" onSubmit={handleFormSubmit}>
        <label htmlFor="fage">Age:</label>
        <input
          type="text"
          name="fage"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;