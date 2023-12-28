import React from 'react';

import vinyl from '../assets/vinyl.png';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Sorry, we couldn&apos;t find what you were looking for.</p>
      <div className="text-center">
        <img src={vinyl} className="not-found-vinyl mt-3" alt="logo" />
      </div>
    </div>
  );
};

export default NotFound;
