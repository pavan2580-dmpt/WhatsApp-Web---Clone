import React, { useState } from 'react'
import { OnClickUserData } from '../App'
import { useContext } from 'react'
import { GrEmoji } from "react-icons/gr";
import { PiPaperclip } from "react-icons/pi";
import { IoMdMic } from "react-icons/io";
import EmojiPicker from 'emoji-picker-react';
import Cookies from 'js-cookie';

function ChatBox() {
    const {chatToUser} = useContext(OnClickUserData);
    const {ChatId} = useContext(OnClickUserData)
    const [showEmoj,SetShowEmoj] = useState(false)
    const [emoj,SetEmoj] = useState('')
    const [Text,SetText] = useState('');

  return (
    <>
    <div className='chatBox-main-container w-full h-full'>
        <div className="ChatBox----Header--- w-full h-[80px] bg-neutral-300 ">
            <div className="Header-profile-data flex w-fit h-fit items-center gap-3 pl-5">
                <div>
                    <img src={chatToUser.image} alt="profile" className='rounded-full w-[70px]'/>
                </div>
                <div>
                    <p className='text-xl'>{chatToUser.name}</p>
                    {navigator.onLine ? 'Online' :'offline'}
                </div>
            </div>
        </div>
        {/* -------------------------body--------------------------------------- */}

        <div className="ChatBox-Body w-full h-[71vh]  bg-[url('./components/assets/8c98994518b575bfd8c949e91d20548b.jpg')] "></div>
        {/* -----------------------footer----------------------------- */}
        <div className="ChatBox-footer-container w-full h-[85px] bg-neutral-300 flex gap-5 pl-5 items-center">
           
               
            <GrEmoji size={40} className='cursor-pointer text-zinc-500 hover:text-orange-500' onMouseEnter={()=>{SetShowEmoj(true)}} onMouseLeave={()=>{SetShowEmoj(false)}}/> 
           {
            showEmoj && (
                <div className='relative top-[-120px] left-[-60px]' onMouseEnter={()=>{SetShowEmoj(true)}} onMouseLeave={()=>{SetShowEmoj(false)}}>
                <EmojiPicker style={{position:'absolute',bottom:'-100px'}} 
               onEmojiClick={(emojiObject, event) => {
                const selectedEmoji = emojiObject.emoji;
                SetEmoj(selectedEmoji);
                SetText(Text + selectedEmoji);
            }}/>
           </div>
            )
           }
            <PiPaperclip size={40} className='cursor-pointer text-zinc-500'/>
            <input type="text" placeholder='Enter your message' 
            className='w-[80%] h-[50px] rounded-3xl pl-5 outline-none text-xl'
             value={Text} 
             onChange={(e)=>{SetText(e.target.value)}}
             onKeyDown={(key)=>{
                if(key.key === "Enter"){
                    let message = {
                        senderId :Cookies.get("UserId") ,
                        reciverId :ChatId
                    }
                }
             }}
             
             />
            <IoMdMic size={40} className='cursor-pointer text-zinc-500'/>
        </div>

    </div>

    
    </>
  )
}

export default ChatBox