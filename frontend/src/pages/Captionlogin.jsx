// import React, { useState } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Captionlogin = () => {

        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [captionData,setCaptionData] = useState('')
    
        const submitHandler = (e)=>{
            e.preventDefault();
            setCaptionData({
                email :email,
                password

            })
            console.log(captionData);
            setEmail('')
            setPassword('') 
        }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
    <div>
        <img className ='w-20 m-2' src ="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" />
    <form onSubmit={(e)=>{
        submitHandler(e)
    }}>
      <h3 className="text-lg font-medium mb-2">What's Your phone number</h3>
      <input 
      required 
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
      type="email"
      placeholder="email@example.com" />
      
      
      <h3 className="text-lg font-medium mb-2">Enter Password</h3>
      
      <input
      required 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }} 
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
      type="password"
      placeholder="password"/>
      
      <button
      className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>
      <p className="text-center"> Join a fleet? <Link to='/caption-signup' className="text-blue-500 text-center">Register as a Caption</Link></p>
      </form>
    </div>
    <div>
        <Link to ='/login' className="bg-[#ffa200] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Sign in as User</Link>
    </div>
    </div>
    </div>
  )
}


export default Captionlogin
