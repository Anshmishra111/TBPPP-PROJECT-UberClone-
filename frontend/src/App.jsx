// import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captionlogin from './pages/Captionlogin'
import CaptionSignup from './pages/CaptionSignup'
import { UserDataContext } from './context/UserContext'
import { useContext } from 'react'

const App = () => {


  const ans = useContext(UserDataContext);

  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='caption-login' element={<Captionlogin/>} />
        <Route path='caption-signup' element={<CaptionSignup/>} />
      </Routes>
    </div>
  )
}

export default App
