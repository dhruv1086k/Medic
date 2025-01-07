import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer"
import AboutSection from "./Pages/About/About";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
