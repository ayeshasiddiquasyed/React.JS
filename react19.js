import React, { useState } from 'react';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('Select');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [mobileErr, setMobileErr] = useState('');
  const [countryErr, setCountryErr] = useState('');
  const [genderErr, setGenderErr] = useState('');

  const printError = (elemId, hintMsg) => {
    switch (elemId) {
      case 'nameErr':
        setNameErr(hintMsg);
        break;
      case 'emailErr':
        setEmailErr(hintMsg);
        break;
      case 'mobileErr':
        setMobileErr(hintMsg);
        break;
      case 'countryErr':
        setCountryErr(hintMsg);
        break;
      case 'genderErr':
        setGenderErr(hintMsg);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    // Your existing validation logic goes here

    // For example, validating name
    if (name === '') {
      printError('nameErr', 'Please enter your name');
    } else {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(name)) {
        printError('nameErr', 'Please enter a valid name');
      } else {
        printError('nameErr', '');
      }
    }

    // Repeat this process for other form fields

    // If there are no errors, you can proceed with form submission logic

    // Example: Submitting form data
    const dataPreview = `You've entered the following details:
Full Name: ${name}
Email Address: ${email}
Mobile Number: ${mobile}
Country: ${country}
Gender: ${gender}
${hobbies.length ? `Hobbies: ${hobbies.join(', ')}` : ''}`;

    alert(dataPreview);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <form name="contactForm" onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      {/* ... Rest of your form JSX ... */}
    </form>
  );
};

export default ApplicationForm;
