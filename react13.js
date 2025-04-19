import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (allText(name)) {
      alert('Your Name has been accepted....');
      // You can perform additional actions with the valid name here
    } else {
      alert('Please input characters only');
    }
  };

  const allText = (inputValue) => {
    const textPattern = /^[A-Za-z]+$/;
    return inputValue.match(textPattern);
  };

  return (
    <div>
      <form name="fm1" onSubmit={handleFormSubmit}>
        <label htmlFor="fname">Name:</label>
        <input
          type="text"
          name="fname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;