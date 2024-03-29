"use client";

import { useUserStore } from "@/store";
import Navbar from "../component/Navbar";
import React, { useEffect, useState } from 'react';


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

        <div className="mt-4">
          <p className="pagetitle">Employer Question</p>
        </div>

      </div>
      <div className="employText">
        <ol className="numberedList">
          <li>
            What is your previous company?{' '}
            <textarea placeholder="N/A"></textarea>
          </li>
          <li>
            Are you willing to undergo a pre-employment background check?{' '}
            <textarea placeholder="Yes/No"></textarea>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Page;