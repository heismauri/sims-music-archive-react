import React from 'react';

const Footer = () => {
  return (
    <div className="footer text-center my-4">
      <p className="text-black text-opacity-75 m-0">
        Copyright © {new Date().getFullYear()} Sims Music Archive | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
