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
      {/* other code to be insert */}
    </div>
  );
}

export default Page;