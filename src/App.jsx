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
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import ToastNotification from './components/ToastNotification';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './assets/components/NavbarComp';
import Footer from './assets/components/Footer';
import Home from './data/pages/Home';
import Destinations from './data/pages/Destinations';
import LoginPage from './data/pages/LoginPage';
import RegisterPage from './data/pages/RegisterPage';
import HotelInfoPage from './data/pages/HotelInfoPage';
import TouristSpotPage from './data/pages/TouristSpotPage';
import FoodPlacePage from './data/pages/FoodPlacePage';
import ToastNotification from './assets/components/toast_notification';

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinations/:id"
          element={
            <>
              <SignedIn>
                <Destinations />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/hotel/:hotelId"
          element={
            <>
              <SignedIn>
                <HotelInfoPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route path="/site/:siteId" element={<TouristSpotPage />} />
        <Route
          path="/food/:foodId"
          element={
            <>
              <SignedIn>
                <FoodPlacePage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
      <ToastNotification />
      <Footer />
      <AiChatbot />
      <EmergencyButton />
    </>
  );
}

export default App;
