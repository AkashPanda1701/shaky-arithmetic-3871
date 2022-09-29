import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Mens from '../Pages/Mens'
import Register from '../Pages/Register'
import Womens from '../Pages/Womens'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mens' element={<Mens />} />
      <Route path='/womens' element={<Womens />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default AllRoutes
