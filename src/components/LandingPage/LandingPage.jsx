import React,{useEffect} from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode } from "jwt-decode"
import { useContext } from 'react';
import { AccountContext } from '../../App';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
function LandingPage() {
  const {account,SetAccount} = useContext(AccountContext);
 
  



  const Navigation = useNavigate();
  return (
    <>
    <div className='w-full h-[100vh] border-solid bg-[#111a20] '>
      <div className='landing-Header w-full h-[250px] bg-[#00a884]'/>  
      <div className='Landing-page-content-box w-[80%] h-[80%] bg-white absolute top-[120px] left-[10%] shadow-lg rounded'>
        <div className="content-page-header md:text-3xl md:pl-10 pb-10 md:pt-8 mb-5 md:font-bold border-2 border-botton-solid">Use WhatsApp-clone on your computer</div>
        <div className="content-box w-full h-fit flex flex-col justify-center   xl:flex-row">
          <div className="instructions-for-login text-2xl xl:text-3xl xl:font-light pl-10 pt-10 flex flex-col gap-6 md:w-full xl:w-[60%] lg:text-2xl">
            <p>1.Create an account</p>
            <p>2.Use Google Account for sign in</p>
            <p>3.Choose your Google Account</p>
            <p>4.Get ready to enhance your chatting experience</p>
          </div>
          <div className="login-using-google-account md:w-full lg:w-[30%] h-fit  ">
            <div className="login-backgroungd ml-[150px] xl:ml-0 w-[350px] h-[350px]  ">
              
               <img src="./src/components/assets/Qrcode_wikipedia.jpg" alt="qr"/>
               <div className='relative top-[-200px] shadow-md pl-6 hover:scale-110 w-fit '>
               <GoogleLogin
                   onSuccess={async (credentialResponse) => {
                    const decode = jwtDecode(credentialResponse.credential);
                    SetAccount(decode)

                    const response = await axios.post('http://localhost:5000/api/UserDetails',{
                       email:decode.email,
                       name:decode.name,
                       about:"About",
                       picture:decode.picture,
                    })
                    if(response.status)
                         { Navigation('/Account-creation',{state:{GoogleData:response.data}})
                         const Data= response.data
                            Cookies.set('email',Data.email)
                            Cookies.set('name',Data.name)
                            Cookies.set('image',Data.image)
                            Cookies.set('phno',Data.phno)
                            Cookies.set('about',Data.About)
                            Cookies.set('UserId',Data.id)
                        
                        }
                       
                   }}
                   onError={() => {
                     console.log('Login Failed');
                   }}
                   width={'300px'}
                  />
               </div>
              
            </div>
          </div>
        </div>

      </div>  
      
      
      
    </div>
    </>
  )
}

export default LandingPage