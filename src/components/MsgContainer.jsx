import React, { useEffect } from 'react'
import { GoDotFill } from "react-icons/go";
import {OnClickUserData,ADDuser} from "../App";
import { useContext } from 'react';
function MsgContainer(props) {
  const {SetChatToUser,SetShowChatToUser} = useContext(OnClickUserData)
  const {SetAdduser} = useContext(ADDuser)
  const {SetChatId} = useContext(OnClickUserData)
  return (
    <>
    <div className="message-container w-full h-fit pl-5 pt-3 pb-3 border-b-2 border-solid 
     flex gap-3 items-center cursor-pointer" 
     onClick={async()=>{
      SetChatToUser(props.values)
      SetShowChatToUser(true)
      SetAdduser(false)
      SetChatId(props.values.ID)
      }}>
        <img src={props.values.image} alt="image"  className='rounded-full w-[50px] h-[50px]'/>
        <div className="context">
        <p className='text-xl'>{props.values.name}</p>
        <p className='text-md text-green-600 font-bold '>{navigator.onLine ? <span className='flex items-center'> <GoDotFill/>Online</span> :<span className='flex items-center'><GoDotFill/> Offline</span> }</p>
        </div>
    </div>
    
    </>
  )
}

export default MsgContainer