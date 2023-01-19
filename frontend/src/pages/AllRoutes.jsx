import React from "react";
import { Route, Routes } from "react-router-dom";
import { Covid } from "./covid_0381";
import Home from "./Home";
import Lab from "./Lab";
import Products from "./Products";
import SinglePage from "./SinglePage";
import { ChakraProvider } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ChakraProvider>
            <Home />
          </ChakraProvider>
        }
      />
      <Route
        path="/lab"
        element={
          <ChakraProvider>
            <Lab />
          </ChakraProvider>
        }
      />
      <Route path="/covid" element={<Covid />} />
      <Route path="/singleproduct" element={<ChakraProvider><SinglePage /></ChakraProvider>} />
      <Route path="/products" element={<ChakraProvider><Products /></ChakraProvider>} />
    </Routes>
  );
};

export default AllRoutes;
