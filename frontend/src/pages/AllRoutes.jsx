import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Covid } from './covid_0381'
import Home from './Home'
import Lab from './Lab'
import SinglePage from './SinglePage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/lab' element={<Lab />} />
        <Route path="/covid" element={<Covid/>} />
        <Route path='/product' element={<SinglePage/>} />
    </Routes>
  )
}

export default AllRoutes
