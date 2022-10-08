import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../components/MainPage'
import NavBar from '../components/NavBar'
import ResultadosBusqueda from '../components/ResultadosBusqueda'


const Approutes = () => {

  // const [cheking, setCheking] = useState(true)

  // if (cheking) {
  //   return (
  //     <div class="nubes">
  //       <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1646058984/block-master/sh8bnxrj9kdkonmb9kto.png" alt="nubes" />
  //       <div class="poke"></div>
  //     </div>
  //   )}


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/pokedex' element={<ResultadosBusqueda />} />
      </Routes>
    </>
  )
}

export default Approutes