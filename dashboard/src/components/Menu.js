import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
const Menu = () => {
  const [selectedHead, setSelectedHead] = useState(0);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const menuClickHandle = (index) => {
    setSelectedHead(index);
  };
  const menuClass = "menu";
  const activeMenuClass = " menu selected ";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(0)}
            >
              <p className={selectedHead === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(1)}
            >
              <p className={selectedHead === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(2)}
            >
              <p className={selectedHead === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(3)}
            >
              <p className={selectedHead === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(4)}
            >
              <p className={selectedHead === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => menuClickHandle(5)}
            >
              <p className={selectedHead === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
