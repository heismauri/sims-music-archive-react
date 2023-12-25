import React from 'react';

import logo from '../logo.svg';

const NotFound = () => {
  return (
    <div>
      <h3>Not Found</h3>
      <p>Sorry, we couldn&apos;t find what you were looking for.</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default NotFound;
