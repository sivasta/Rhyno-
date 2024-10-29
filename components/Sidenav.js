import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/rhy2.ico'; // Adjust the path as necessary
import  './loga.css'; // Adjust the path as necessary

function Sidenav() {
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [dropdownActive, setDropdownActive] = useState(false);
  const sidenavRef = useRef(null);

  const openNav = () => {
    setSidenavWidth(200);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleClickOutside = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      closeNav();
    }
  };

  useEffect(() => {
    if (sidenavWidth > 0) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.addEventListener('click', handleClickOutside);
    } else {
      document.body.style.backgroundColor = "#FAFAFA";
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sidenavWidth]);

  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sidenavWidth}px` }}
        ref={sidenavRef}
      >
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <Link to="/home">Home</Link>
        <Link to="/about">About us</Link>
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Products <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container" style={{ display: dropdownActive ? 'block' : 'none' }}>
          <Link to="/se03lite">SE03 Lite</Link>
          <Link to="/se03">SE03</Link>
          <Link to="/se03max">SE03 Max</Link>
          <Link to="/compare">Compare all</Link>
        </div>
        <Link to="/contact">Contact us</Link>
        <Link to="/prebook">Pre-book now</Link>
      </div>

      <span className="menu-icon" style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>
        &#9776; <img src={logo} className="logo" width="40px" alt="logo" />
      </span>
    </div>
  );
}

export default Sidenav;
