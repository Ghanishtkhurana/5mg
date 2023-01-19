import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar />
      </ChakraProvider>
      <AllRoutes />
      <ChakraProvider>
      <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
