import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faBars, faHouse, faPerson, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../Sidebar.css'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon" onClick={handleSidebarOpen}>
        <FontAwesomeIcon icon={faBars}/>
        </div>
      ) : (
        <>
          <div className="sidebar_items">
            <div className="sidebar_item" onClick={handleSidebarClose}>
              <FontAwesomeIcon icon={faBars}/>
              <p>Settings</p>
            </div>
            <div className="sidebar_item">
                <FontAwesomeIcon icon={faHouse}/>
              <p>Home</p>
            </div>
            <div className="sidebar_item">
                <FontAwesomeIcon icon={faUserCircle}/>
              <p>About</p>
            </div>
            <div className="sidebar_item">
                <FontAwesomeIcon icon={faPhone}/>
              <p>Contact</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;