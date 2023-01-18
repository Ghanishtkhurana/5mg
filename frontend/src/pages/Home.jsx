import React from 'react'
import Cereals from '../components/HomeComponents/Cereals'
import ComboDeals from '../components/HomeComponents/ComboDeals'
import FullbodyCheck from '../components/HomeComponents/FullbodyCheck'
import KnowMore from '../components/HomeComponents/KnowMore'
import PlantBased from '../components/HomeComponents/PlantBased'
import Search from "../components/HomeComponents/Search"
import Trending from '../components/HomeComponents/Trending'

const Home = () => {
  return (
    <div>
      <Search />
      <KnowMore />
      <FullbodyCheck />
      <ComboDeals />
      <Trending />
      <Cereals />
      <PlantBased />
    </div>
  )
}

export default Home
