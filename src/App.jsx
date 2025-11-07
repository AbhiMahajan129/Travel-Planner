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
import ToastNotification from "./assets/components/ToastNotification.jsx";
// src/App.jsx
import SiteFeedbackPage from './data/pages/SiteFeedbackPage';
import FoodFeedbackPage from './data/pages/FoodFeedbackPage';
import HotelFeedbackPage from './data/pages/HotelFeedbackPage';
import Packages from './data/pages/Packages';
import PackageDetail from './data/pages/PackageDetail';
import PlanTrip from './data/pages/PlanTrip';
import PlanTripForm from './data/pages/PlanTripForm';
import MyTrips from './data/pages/MyTrips';
import Sites from './data/pages/Sites';
import Hotels from './data/pages/Hotels';
import Restaurants from './data/pages/Restaurants';
import Agencies from './data/pages/Agencies';
import AgencyDetail from './data/pages/AgencyDetail';
import AgencyFeedback from './data/pages/AgencyFeedback';
import Experiences from './data/pages/Experiences';
import ExperienceDetail from './data/pages/ExperienceDetail';

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
        <Route path="/food/:foodId" element={<FoodPlacePage />} />
        <Route path="/site/:siteId/feedback" element={<SiteFeedbackPage />} />
        <Route path="/food/:restaurantId/feedback" element={<FoodFeedbackPage />} />
        <Route path="/hotel/:hotelId/feedback" element={<HotelFeedbackPage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/plan-trip/form" element={<PlanTripForm />} /> 
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/agencies/:agencyId" element={<AgencyDetail />} />
        <Route path="/agencies/:agencyId/feedback" element={<AgencyFeedback />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:experienceId" element={<ExperienceDetail />} />
      </Routes>
      <ToastNotification />
      <Footer />
      <AiChatbot />
      <EmergencyButton />
    </>
  );
}

export default App;
