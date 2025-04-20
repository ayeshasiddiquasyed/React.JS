import React, { useRef } from 'react';

const PasswordValidationForm = () => {
  const textInputRef = useRef(null);

  const checkPassword = (inputtxt) => {
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.match(decimal)) {
      alert('Correct, try another...');
      return true;
    } else {
      alert('Wrong...!');
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = textInputRef.current.value;
    checkPassword(inputValue);
  };

  return (
    <div className="mail">
      <h2>Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li><input type='text' name='text1' ref={textInputRef} /></li>
          <li className="rq">*Enter numbers only.</li>
          <li>&nbsp;</li>
          <li><input type="submit" name="submit" value="Submit" /></li>
          <li>&nbsp;</li>
        </ul>
      </form>
    </div>
  );
};

export default PasswordValidationForm;
