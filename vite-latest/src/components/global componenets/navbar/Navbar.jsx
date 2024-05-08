import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/"><img className="logo" src='/src/assets/sparkans_logo.png'></img></Link>
            <ul className="nav-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/apparel">Apparel</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
            <button className='Connect_Button'>Connect</button>
            <button className='Donate_Button'>Sponsor Us</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar