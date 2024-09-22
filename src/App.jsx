import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";

import "./styles/App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
