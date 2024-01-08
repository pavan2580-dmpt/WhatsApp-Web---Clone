import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function UserData() {

  const location  = useLocation();
  const [userData,SetUserData] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (location.state && location.state.GoogleData) {
        try {
          SetUserData(location.state.GoogleData); 
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    fetchData();
  }, [location.state]);




  return (
    <>
    {
      location.state && location.state.GoogleData ? (
        <div className="userData-for-whatsapp-clone-creation-main-container w-[100%] h-[100vh] flex items-center justify-center 
        bg-[url('./src/components/assets/Sprinkle.jpg')]">
      <div className="data-of-user-container-form-fields w-[450px] h-fit">
      <div className="flex flex-col gap-4 max-w-md p-5 rounded-lg bg-gray-900 text-white border-2 border-gray-800">
    <p className="text-2xl font-semibold relative flex items-center pl-8 text-[#00a884]">Your Details</p>
    <p className="text-sm text-gray-400">Enter your details to access the WhatApp-clone.</p>
    
        <label className=" relative">
            <input className="input bg-gray-700 text-white w-full py-4 px-2 pt-8 outline-none rounded-md border border-gray-500" type="text" value={userData.name || ''} required readOnly/>
            <span className="absolute left-2 top-0 text-xl text-gray-500 transition-all">User Name</span>
        </label>
   
    <label className="relative">
        <input 
        className="input bg-gray-700 text-white w-full py-3 pt-8 px-2 outline-none rounded-md border border-gray-500" 
        type="email" 
        placeholder="" 
        value={userData.email || ''} 
        required 
        readOnly/>

        <span className="absolute left-2 top-0 text-xl text-gray-500 transition-all">Email</span>
    </label>
    <label className="relative">
        <input 
        className="input bg-gray-700 text-white w-full py-3 pt-8 px-2 outline-none rounded-md border border-gray-500" 
        type="text" 
        value={userData.phno || ''} 
        required 
        readOnly/>
        <span className="absolute left-2 top-0 text-xl text-gray-500 transition-all">Phone Number</span>
    </label>
    <label className="relative">
        <input 
        className="input bg-gray-700 text-white w-full py-3 pt-8 px-2 outline-none rounded-md border border-gray-500" 
        type="text" 
        placeholder="Busy/At Gym" 
        value={userData.About || ''}  />

        <span className="absolute left-2 top-0 text-xl text-gray-500 transition-all">About</span>
    </label>
    <button className="submit py-2 px-4 flex items-center justify-center gap-6 rounded-md
     bg-[#00a884] text-white text-2xl transition-all hover:bg-[#1e7965] focus:outline-none
      focus:bg-cyan-500"  onClick = {()=>{nav('/home')}}>Next <FaArrowRightLong /> </button>
   
</div>

      </div>
    </div>
      ):(nav('/'))
    }
    
    
    </>
  );
}

export default UserData;
