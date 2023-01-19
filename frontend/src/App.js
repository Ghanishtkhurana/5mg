import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Filter } from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <Filter/> */}
    </div>
  );
}

export default App;
