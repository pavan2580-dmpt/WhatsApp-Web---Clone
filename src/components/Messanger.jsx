import React ,{useContext}from 'react'
import MenuBar from './MenuBar'
import HeroSection from './HeroSection'
import { ADDuser } from '../App'
import AddUser from './AddUser';
import ChatBox from './ChatBox';
import { OnClickUserData } from '../App'


function Messanger() {
  const {adduser} = useContext(ADDuser);
  const {ShowChatToUser} = useContext(OnClickUserData)
  return (
    <>
      <div className="Messanger-Page-Main-container w-full h-[100vh]">
        <div className="messanger-headerpart w-full h-[150px] bg-[#00a884]"/>
        <div className="Main-container-for-chatting-box w-[96%] ml-5 h-[90vh] absolute
         shadow-lg border-2 border-solid top-10 bg-slate-100 flex rounded-xl overflow-hidden">
          <div className='w-[450px] h-full '>
                  <MenuBar/>
          </div>
              <div className='w-full h-full '>
              {adduser ?(
                      <AddUser />
                ):(
                  ShowChatToUser ? <ChatBox /> : <HeroSection />
                   ) }
              </div>
        </div>
      </div>
    
    </>
  )
}

export default Messanger