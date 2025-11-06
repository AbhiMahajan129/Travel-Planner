// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./assets/components/NavbarComp"; // Correct import
import Footer from "./assets/components/Footer";
import Home from "./data/pages/Home";
import Destinations from "./data/pages/Destinations";
import LoginPage from "./data/pages/LoginPage";
import RegisterPage from "./data/pages/RegisterPage";
import HotelInfoPage from "./data/pages/HotelInfoPage";
import TouristSpotPage from "./data/pages/TouristSpotPage";
import FoodPlacePage from "./data/pages/FoodPlacePage";
import AiChatbot from "./assets/components/AiChatbot";
import EmergencyButton from "./assets/components/EmergencyButton";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:id" element={<Destinations />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hotel/:hotelId" element={<HotelInfoPage />} />
        <Route path="/site/:siteId" element={<TouristSpotPage />} />
        <Route path="/food/:foodId" element={<FoodPlacePage />} />
      </Routes>
      <Footer />
      <AiChatbot />
      <EmergencyButton />
    </>
  );
}

export default App;
