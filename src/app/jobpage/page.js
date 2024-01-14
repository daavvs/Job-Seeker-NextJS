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
        <div className="relative flex items-stretch w-full mb-4">
          <input
            className="searchbar"
            type="text"
            placeholder="Search by title, keyword, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a className="searchicon" onClick={handleSearch}>
            <RiSearchLine size={20} color="#6B7280" />
          </a>
        </div>
        <div className="mt-4">
          <p className="special">Recommended job for you</p>
          </div>
      </div>
      {/* other code to be insert */}
    </div>
  );
}

export default Page;
