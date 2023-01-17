import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Lab from './Lab'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/lab' element={<Lab />} />
    </Routes>
  )
}

export default AllRoutes
