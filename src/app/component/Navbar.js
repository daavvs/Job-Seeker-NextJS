import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
      <nav className="nav">
        <a href="/" className="site-title">
        <img src="./images/loginlogo.png" alt="Logo" className="logo-image"/>BusYan</a>
        <ul>
          <li>
            <a href="/home">
              <AiFillHome size={30}/>
            </a>
          </li>
          <li>
            <a href="/notification">
            <IoIosNotifications size={30}/>
            </a>
          </li>
          <li>
            <a href="/profile">
            <CgProfile size={30}/>
            </a>
          </li>
        </ul>
      </nav>
    );
  }