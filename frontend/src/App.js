import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { Carausel } from "./components/Carausel";
import { Ayurved } from "./pages/Ayurved_0381";


function App() {
  return (
    <div className="App">
      {/* <ChakraProvider>
      <Navbar />
      </ChakraProvider>

      <AllRoutes />

      <ChakraProvider>
      <Footer />
      </ChakraProvider> */}
      <Ayurved/>
    
    </div>
  );
}

export default App;
