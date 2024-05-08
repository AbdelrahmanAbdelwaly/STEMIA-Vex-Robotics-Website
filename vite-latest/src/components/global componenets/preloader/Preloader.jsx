import React, { useEffect } from 'react';
import './preloader.css';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]");
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="preloader" data-preloader>
      <div className="circle"></div>
    </div>
  );
}

export default Preloader;