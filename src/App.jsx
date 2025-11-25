import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <LandingPage 
        selectedBrand={selectedBrand} 
        setSelectedBrand={setSelectedBrand} 
      />
      <Footer />
    </div>
  );
}

export default App;
