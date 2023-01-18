import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Covid } from './covid_0381'
import Lab from './Lab'
 import { ChakraProvider } from '@chakra-ui/react'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/lab' element={ <ChakraProvider > <Lab /> </ChakraProvider>   } />

        <Route path="/covid" element={<Covid/>} />
    </Routes>
  )
}

export default AllRoutes
