import "./App.css";
import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "../src/Components/Main/Main";
import About from "../src/Components/About/About";
import NewArrivals from "../src/Components/NewArrivals/NewArrivals";
import Feature from "../src/Components/Feature/Feature";
import Services from "../src/Components/Services/Services";
import Footer from "../src/Components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
        <Feature />
        <NewArrivals />
        <About />
        <Services />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
