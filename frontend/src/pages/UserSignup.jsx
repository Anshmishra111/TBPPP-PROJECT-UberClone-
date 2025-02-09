// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"

const UserSignup = () => {

      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [firstName,setFirstName] = useState('')
      const [lastName,setLastName] = useState('')
      const [userData,setUserData] = useState({})

       const submitHandler = (e) =>{
          e.preventDefault()
          setUserData({
            fullName:{
              firstName : firstName,
              lastName : lastName,
            },
            email:email,
            password:password
          })

          // console.log(userData);
          setEmail('')
          setFirstName('')
          setLastName('')
          setPassword('')

       }

  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
    <div>
        <img className="w-16 mb-10"src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
    <form onSubmit={(e)=>{
        submitHandler(e)
    }}>

      <h3 className="text-base w-full font-medium mb-2">What's Your Caption's name</h3>
      <div className="flex gap-4 mb-6">
      <input 
      required 
      className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm"
      type="text"
      placeholder="First name"
      value={firstName}
      onChange={(e)=>{
        setFirstName(e.target.value)
      }} />

      <input 
      required 
      className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm"
      type="text"
      placeholder="Last name"
      value={lastName}
      onChange={(e)=>{
        setLastName(e.target.value)
      }} />
      </div>

      <h3 className="text-base font-lg mb-2">What's our Caption's email</h3>
      <input 
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }} 
      required 
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base"
      type="email"
      placeholder="email@example.com" />
      
      
      <h3 className="text-base font-lg mb-2">Enter Password</h3>
      
      <input
      required 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }} 
      className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
      type="password"
      placeholder="password"/>
      
      <button
      className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>
      <p className="text-center">Already have a account? <Link to='/login' className="text-blue-500 text-center">Login Here</Link></p>
      </form>
    </div>
    <div>
        <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span>
          and <span className="underline">Terms of Service apply.</span></p>
    </div>
    </div>
    </div>
  )
}

export default UserSignup
