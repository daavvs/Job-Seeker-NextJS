"use client";

import Navbar from "../component/Navbar";
import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    
  };

  return (
    <div>
      <Navbar />
      <div className="mt-4 flex flex-col items-center">
      
        <div className="mt-4">
          <p className="pagetitle">Bus Driver</p>
          </div>
      </div>
      <div className="container">
        <ul className="infolist">
          <li>Name: Jacky Taldo</li>
          <li>Email: jack@gmail.com</li>
          <li>Phone: +63 995 021 5621</li>
        </ul>
        <div className="profilePicture">
          <img src="./images/loginlogo.png" alt="Logo" />
        </div>
      </div>

      <div className="textAreas">
        <textarea placeholder="Question for the applicant"></textarea>
        <textarea placeholder="Work Experience"></textarea>
        <textarea placeholder="Education"></textarea>
        <textarea placeholder="Resume"></textarea>
        <textarea placeholder="Address"></textarea>
        <textarea placeholder="Drivers License"></textarea>
        <textarea placeholder="Additional information for the employer"></textarea>

        
      </div>
      <div><button className="submitButton">Submit Application</button></div>
    </div>
    
    
  );
}

export default Page;