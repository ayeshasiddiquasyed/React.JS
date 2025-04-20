import React, { useState } from 'react';

function App() {
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateCreditCardNumber(creditCardNumber)) {
      // You can perform additional actions with the valid credit card number here
      alert('Valid American Express credit card number!');
    } else {
      alert('Not a valid American Express credit card number!');
    }
  };

  const validateCreditCardNumber = (cardNumberToValidate) => {
    const cardPattern = /^(?:3[47][0-9]{13})$/;
    return cardNumberToValidate.match(cardPattern);
  };

  return (
    <div className="mail">
      <h2>Input Credit Card No. [Starting with 34 or 37, length 15 digits (American Express)] and Submit</h2>
      <form name="form1" onSubmit={handleFormSubmit}>
        <ul>
          <li><input
            type="text"
            name="text1"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
          /></li>
          <li>&nbsp;</li>
          <li className="submit"><input type="submit" name="submit" value="Submit" /></li>
          <li>&nbsp;</li>
        </ul>
      </form>
    </div>
  );
}

export default App;
