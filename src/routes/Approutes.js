import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import RegistroUser from '../components/RegistroUser'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Approutes = () => {

  const [cheking, setCheking] = useState(true)
  const [log, setLog] = useState(false)

  useEffect(() => {
    const auth= getAuth()
    onAuthStateChanged(auth,
      (user)=>{
        if(user?.uid){
          setLog(true)
        }else{
          setLog(false)
        }
        setCheking(false)
      }) 
  }, [setCheking,setLog])

  if(cheking){
    return(
      <div class="nubes">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1646058984/block-master/sh8bnxrj9kdkonmb9kto.png" alt="nubes" />
          <div class="poke"></div>
      </div>
    )
  }
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <PublicRoutes isAuthenticated={log}>
              <Login/>
            </PublicRoutes>
          } />

        <Route path='/registro' element={
          <PublicRoutes isAuthenticated={log}>
            <RegistroUser/>
          </PublicRoutes>
        }/>

        <Route path='/*' element={
          <PrivateRoutes isAuthenticated={log}>
            <DashboardRoutes />
          </PrivateRoutes>
        } />

        </Routes>
    </BrowserRouter>
  )
}

export default Approutes