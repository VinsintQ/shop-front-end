import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
//components 
import Navbar from './components/navbar'
import Signin from './components/signin'
function App() {
 

  return (

    <>
    <Navbar/>
    <Routes>
     <Route path='/signin' element={<Signin/>}></Route>
     <Route path='/signup' element={""}></Route>
    </Routes>
     <h2>Welcome to Shop</h2>
    </>
  )
}

export default App
