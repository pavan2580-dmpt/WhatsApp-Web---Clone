import React, { useRef, useState,useContext, useEffect } from 'react'

import { IoMdMore ,IoMdArrowBack} from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { MdSearch ,MdOutlineEdit,MdMessage} from "react-icons/md";

import { ADDuser, AccountContext ,OnClickUserData} from '../App';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MsgContainer from './MsgContainer';

function MenuBar() {
  const navig = useNavigate();
    const [set,Setset] = useState(true);
    const [GetContacts,SetContacts]  = useState([]);
    
    const ShowProf = useRef(null);

    function ShowProfile(){
        if(set){
            if(ShowProf.current)
            ShowProf.current.style.left ='0';
            Setset(!set)
        }else{
            ShowProf.current.style.left ='-480px';
            
            Setset(!set)
        }
    }

    useEffect(()=>{
      GetUserData();
      
    },[])

    const GetUserData = async()=>{
      const MSGContainer = await axios.post('http://localhost:5000/api/UserContacts',{
        UserId:Cookies.get('UserId')
      })
      SetContacts(MSGContainer.data)
    }

    const{account,SetAccount} = useContext(AccountContext) //context api for data not using instead using cookies--
    const {adduser,SetAdduser} = useContext(ADDuser) //context for toggling the hero - adding user vice-versa---
    const {SetShowChatToUser} = useContext(OnClickUserData)
    SetAccount("changed in the MenuBar")
// ----------------------------------------------------------

    const MSgContainerData = GetContacts.map((item)=>(
      <MsgContainer key={item.phno} values = {item} /> // responsible for mesg container displat
    ))
// ---------------------------------------------------------
  return (
    <>
    {
      Cookies.get('email') ? (<div className="MenuBar w-[450px] border-2 border-solid  h-full overflow-hidden">

      <div className="Profile-user-click-image w-[450px] h-full absolute z-10   bg-gray-300 duration-1000 left-[-480px] " ref={ShowProf}>
        <div className="profile-header-part w-full h-[108px]  bg-[#00a884] flex items-end pb-5 pl-10">
          <IoMdArrowBack size={30} onClick={ShowProfile} className='cursor-pointer '/> <span className='text-2xl pl-1'> Profile</span>
        </div>
        <div className="profile-picture-space w-full h-fit pt-4 pb-4 flex justify-center items-center bg-gray-300">
          <img src={Cookies.get('image')} alt="profile" className='w-[200px] rounded-full' />
        </div>
        {/* -----------name------------------ */}
      <div className='name--Scerion bg-white'>
      <p className='text-[#00a884] font-semibold text-2xl pl-5'>Your Name</p>
      <div className='pl-5 mt-5 text-xl pb-5 flex justify-between pr-5'><p>{Cookies.get('name')}</p><MdOutlineEdit size={30} className='cursor-pointer'/></div>
      </div>
  {/* -----------About Name scetion----------------- */}
      <div className="about-name-section bg-gray-300 p-5 box-border text-gray-700">
          This is not your username or pin.This name will be visible to
          your WhatsApp-Clone Users.
      </div>
      {/* ------------------number------------------ */}
      <div className="About-user-Section pt-5 bg-white pb-5">
          <p className='pl-5 mb-3 text-2xl text-[#00a884]'>Phone Number</p>
          <div className='w-full h-fit flex justify-between pl-5 pr-5 text-xl'><p>{Cookies.get('phno')}</p></div>
      </div>



  {/* -----------------About User Section---------------------------- */}
  
      <div>
        <p className=' bg-gray-300 p-5 box-border text-gray-700'>Tell about your self</p>
      </div>

      <div className="About-user-Section pt-5 bg-white pb-5">
          <p className='pl-5 mb-3 text-2xl text-[#00a884]'>About</p>
          <div className='w-full h-fit flex justify-between pl-5 pr-5 text-xl'><p>Busy</p><MdOutlineEdit size={30} className='cursor-pointer'/></div>
      </div>
      
      </div>
  
  
  
          <div className="menu_bar-header w-full h-[60px] 
          pt-2 pl-2 box-border flex justify-between items-center
           bg-[#e3e3e3]" >
              <img src={Cookies.get('image')}
               alt="profile"
               className='w-[45px] h-[45px] rounded-full ml-4 mb-1 cursor-pointer' onClick={ShowProfile} />
               <div className='Icons-space w-fit pr-5 flex gap-5 justify-center items-center'>
                 <MdMessage size={30} className='cursor-pointer '/>
                <FaUserPlus size={30}  className='cursor-pointer '
                 onClick={
                  ()=>{SetAdduser(!adduser) 
                  SetShowChatToUser(false)}} />
                   <IoMdMore size={30}  className='cursor-pointer ' />
              </div>
          </div>
  
          <div className="Search-Bar bg-gray-200 rounded-[30px] w-[95%] h-fit flex p-1 pl-4 mt-3 ml-3 mb-5 items-center gap-3">
              <MdSearch size={30}/>
              <input type="text" placeholder='Search'className='h-[35px] w-[80%] bg-transparent outline-none text-xl ' />
          </div>
            {
              MSgContainerData
            }
      </div>):(navig('/'))
    }
    
    </>
  )
}

export default MenuBar