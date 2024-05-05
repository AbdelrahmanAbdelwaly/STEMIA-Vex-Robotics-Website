import React, { useEffect } from 'react';
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    const primaryHeader = document.querySelector(".primary-header");
    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
      },
      { rootMargin: "10px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);

    return () => {
      navObserver.unobserve(scrollWatcher);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <header className="primary-header">
        <div className="wrapper">
          <div className="primary-header__inner">
            <img className="logo" src='/src/assets/sparkans_logo.png' href='#'></img>
            <ul className="nav-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Apparel</a></li>
              <li><a href="#">Sponsors</a></li>
            </ul>
            <button className='Connect_Button'>Connect</button>
            <button className='Donate_Button'>Donate</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar