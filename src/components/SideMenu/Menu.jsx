import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./menu.scss";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";

function Menu() {
  let history = useHistory();
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar navbar-expand-lg shadow-sm">
          {/* <Link to="#" className="menu-bars">
            <div onClick={showSidebar} />
          </Link> */}
          <ul className="na navbar-nav">
          <li className = 'nav-item'>
          <Link to className = 'user nav-link'>Hello , John Smith</Link>
          
          </li>

          <li className='nav-item'>
          <h4 className='nav-link'>|</h4>
          </li>
            <li className="nav-item">
              <button
                type="submit"
                class="btn btn-link btn-logout nav-link "
                onClick={() => {
                  history.push("/");
                }}
              >
                <u>Logout</u>
              </button>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="na row">
                <Link to  className="user">
                  Hello, John Smith 
                </Link>
              </div>

              <div className="col">
                <h5 className="vs">|</h5>
              </div>

              <div className="row">
                <button type="submit" class="btn btn-link btn-logout" onClick={()=> {history.push('/')}}>
                  Logout
                </button>
              </div>
            </div>
          </form> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="menu-bars">
                <h1 className="menu">Menu</h1>
              </div>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
