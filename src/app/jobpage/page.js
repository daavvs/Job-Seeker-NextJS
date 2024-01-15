"use client";

import Navbar from "../component/Navbar";
import React, { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Link from 'next/link';
import { useUserStore } from "@/store";

function Page() {
  const userStore = useUserStore((state) => state.user)

  useEffect(() => {
    if (!Object.keys(userStore).length) {
      window.location.href = '/'
    }
  })
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
        <div className="job-container">
          {/* Container 1 */}
          <div className="job-border">
            <p className="job-title">Bus Driver - PITAM</p>
            <p className="job-location">Location: Talamban, Tintay, Cebu</p>
          </div>

          {/* Container 2 */}
          <div className="job-border">
            <p className="job-title">Bus Driver - PITAM</p>
            <p className="job-location">Location: Talamban, Tintay, Cebu</p>
          </div>

          {/* Container 3 */}
          <div className="job-border">
            <p className="job-title">Bus Driver - PITAM</p>
            <p className="job-location">Location: Talamban, Tintay, Cebu</p>
          </div>
        </div>
      </div>
      {/* other code to be inserted */}
    </div>
  );
}

export default Page;
