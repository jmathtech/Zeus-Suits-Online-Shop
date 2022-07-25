import "./App.css";
import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "../src/Components/Main/Main";
import About from '../src/Components/About/About';
import NewArrivals from "../src/Components/NewArrivals/NewArrivals";
import Feature from "../src/Components/Feature/Feature";
import Services from "../src/Components/Services/Services";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Feature />
      <NewArrivals />      
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
