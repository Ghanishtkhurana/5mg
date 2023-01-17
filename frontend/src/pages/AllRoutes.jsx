import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Covid } from './covid_0381'
import Lab from './Lab'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/lab' element={<Lab />} />
        <Route path="/covid" element={<Covid/>} />
    </Routes>
  )
}

export default AllRoutes
