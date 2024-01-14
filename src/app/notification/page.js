"use client";

import Navbar from "../component/Navbar";
import React, { useState } from 'react';
import NotificationWithTimer from '../component/NotifcationWithTimer';

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
          <p className="pagetitle">Notification</p>
          </div>
          <div>
      
      <NotificationWithTimer message="You are qualified as a bus driver. Visit the company and start your job!" />
    </div>
      </div>
      {/* other code to be insert */}
    </div>
  );
}

export default Page;