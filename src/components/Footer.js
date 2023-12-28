import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center position-absolute bottom-0 w-100 py-4 px-2">
      <p className="text-black text-opacity-75 m-0">
        Copyright © {new Date().getFullYear()} Sims Music Archive | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
