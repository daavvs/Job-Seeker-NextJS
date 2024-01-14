import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';



export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/"
         className="site-title">
          <img src="./images/loginlogo.png" alt="Logo" className="logo-image" />BusYan
        
      </Link>
      <ul>
        <li>
          <Link href="/home">
            
              <AiFillHome size={30} />
            
          </Link>
        </li>
        <li>
          <Link href="/notification">
            
              <IoIosNotifications size={30} />
            
          </Link>
        </li>
        <li>
          <Link href="/profile">
            
              <CgProfile size={30} />
            
          </Link>
        </li>
      </ul>
    </nav>
  );
}
