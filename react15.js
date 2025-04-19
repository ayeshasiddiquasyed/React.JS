import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateUrl(url)) {
      alert('Valid Url!');
      // You can perform additional actions with the valid URL here
      window.location = url;
    } else {
      alert('Not a valid URL!');
    }
  };

  const validateUrl = (urlToValidate) => {
    const urlPattern = new RegExp(
      "^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$"
    );
    return urlToValidate.match(urlPattern);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="txtUrl">WebSite:</label>
        <input
          type="text"
          id="txtUrl"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Validate" />
      </form>
    </div>
  );
}

export default App;