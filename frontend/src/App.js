import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;


