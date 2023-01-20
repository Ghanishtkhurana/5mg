import React from "react";
import { Route, Routes } from "react-router-dom";
import { Covid } from "./covid_0381";
import Home from "./Home";
import Lab from "./Lab";
import Products from "./Products";
import SinglePage from "./SinglePage";
import { ChakraProvider } from "@chakra-ui/react";
import CerealProductPage from "../components/Productpages/cerealProductPage";
import ComboDealsProductPage from "../components/Productpages/comboDealsProductPage";
import PlantBasedProductPage from "../components/Productpages/plantBasedProductPage";
import TrendingProductPage from "../components/Productpages/trendingProductPage";
import { Ayurved } from "./Ayurved_0381";
import { Fullayurdes } from "../components/Fullayurdes";
import Cart from "./Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/"element={<ChakraProvider><Home /></ChakraProvider>}/><Route
        path="/lab"element={<ChakraProvider> <Lab /></ChakraProvider>}/>
        <Route path="/singleproduct/:id" element={<ChakraProvider><SinglePage /></ChakraProvider>} />
      <Route path="/products" element={<ChakraProvider><Products /></ChakraProvider>} />
      <Route path="/cerealproductspage" element={<ChakraProvider><CerealProductPage /></ChakraProvider>} />
      <Route path="/combodealspage" element={<ChakraProvider><ComboDealsProductPage /></ChakraProvider>} />
      <Route path="/plantbasedproductspage" element={<ChakraProvider><PlantBasedProductPage/></ChakraProvider>} />
      <Route path="/trendingproductpage" element={<ChakraProvider><TrendingProductPage /></ChakraProvider>} />
      <Route path="/covid" element={  <Covid />   } />
      <Route path="/ayurved" element={ <ChakraProvider> <Ayurved/> </ChakraProvider>  }   />
      <Route   path="ayurveda/:id" element={<ChakraProvider><Fullayurdes/></ChakraProvider>} />
      <Route   path="/cart" element={<ChakraProvider><Cart /></ChakraProvider>} />
    </Routes>
  );
};

export default AllRoutes;
