import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddPokemon from '../components/AddPokemon'
import MainPage from '../components/MainPage'
import NavBar from '../components/NavBar'
import Pokedex from '../components/Pokedex'

const DashboardRoutes = () => {
  return (
<>
    <NavBar/>
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/addPoke' element={<AddPokemon />} />
        <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
</>
     
  )
}

export default DashboardRoutes