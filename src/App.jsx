import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from "./components/Messanger";
import UserData from "./components/LandingPage/UserData";
import { createContext, useState } from "react";



export const AccountContext = createContext(null);

export const ADDuser = createContext(null);

export const OnClickUserData = createContext(null);

function App() {
  const [account,SetAccount] = useState('none');
  const [adduser,SetAdduser] = useState(false)
  const [chatToUser,SetChatToUser] = useState('');
  const [ShowChatToUser,SetShowChatToUser] = useState(false)
  const [ChatId,SetChatId] = useState('');
  return (
    <GoogleOAuthProvider clientId='196540668616-hekm3avjocpb6oe7al01559ho507mhql.apps.googleusercontent.com'>
      <AccountContext.Provider value={{account,SetAccount}}>
        <ADDuser.Provider value={{adduser,SetAdduser}}>
          <OnClickUserData.Provider value={{chatToUser,SetChatToUser,ShowChatToUser,SetShowChatToUser,ChatId,SetChatId}}>
         <BrowserRouter>
            <Routes>

               <Route path="/"  element={<LandingPage/>} />
               <Route path="/Account-creation" element={<UserData/>}/>
               <Route path="/home" element={<Messanger/>}/>

             </Routes>
           </BrowserRouter>
           </OnClickUserData.Provider>
           </ADDuser.Provider>
       </AccountContext.Provider>
 </GoogleOAuthProvider>
  );
}

export default App;
