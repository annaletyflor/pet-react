import React from "react";
import "../pages/App.css";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import Sobre from "../components/sobre/Sobre";
import Local from "../components/local/local";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Sobre />
      <Local />
      <Footer />
    </div>
  );
}

export default App;
