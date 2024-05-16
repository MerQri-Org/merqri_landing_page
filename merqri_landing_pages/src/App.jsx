import React from "react";
import { BrowserRouter as BroswerRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partnership from "./pages/Partnership";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BroswerRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
        <Footer />
      </BroswerRouter>
    </div>
  );
};

export default App;
