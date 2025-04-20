import React, { useState } from 'react';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validatePhoneNumber(phoneNumber)) {
      // You can perform additional actions with the valid phone number here
      alert('Valid Phone Number!');
    } else {
      alert('Not a valid Phone Number!');
    }
  };

  const validatePhoneNumber = (phoneNumberToValidate) => {
    const phonePattern = /^\d{10}$/;
    return phoneNumberToValidate.match(phonePattern);
  };

  return (
    <div className="mail">
      <h2>Input a Phone No. [xxxxxxxxxx] and Submit</h2>
      <form name="form1" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="text1"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
