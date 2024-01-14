"use client";

import Navbar from "../component/Navbar";
import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    // Add logic for searching, e.g., make an API call
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
          <span className="searchicon">
            <RiSearchLine size={20} color="#6B7280" />
          </span>
        </div>
        <button
          className="searchbtn"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="mt-5">
          <p className="special">Specialization</p>
          <div className="busborder">
            <p className="text-center text-xl font-bold">Bus Driver</p>
          </div>
          <div className="conductorborder">
            <p className="text-center text-xl font-bold">Bus Conductor</p>
          </div>
        </div>
      </div>
      {/* other code to be insert */}
    </div>
  );
}

export default Page;
