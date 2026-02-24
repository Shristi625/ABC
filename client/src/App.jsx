import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FeaturedStoryDetail from "./pages/Home/FeaturedStoryDetail";
import DestinationDetail from "./pages/Home/DestinationDetail";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import DashboardPage from "./pages/Dashboard/Dashboard";
import DiaryDetails from "./pages/Dashboard/DiaryDetails/DiaryDetails";
import CreateDiary from "./pages/Diary/CreateDiary";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import GroupTripPage from "./pages/GroupTrip/GroupTripPage";
import FoodPage from "./pages/Food/FoodPage";
import Chatbot from "./pages/Chatbot/Chatbot";
import ExplorePage from "./pages/Explore/ExplorePage";
import LandingPage from "./pages/Landing/LandingPage";
import CommunityPage from "./pages/Community/CommunityPage";
import CommunityStoriesPage from "./pages/Community/CommunityStoriesPage";
import Checkout from "./pages/Checkout/Checkout";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Public Route Component (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

function App() {
  React.useEffect(() => {
    // Check if we just arrived from a Google Login redirect
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userData = params.get("user");

    if (token && userData) {
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", userData); // userData is already JSON stringified from server

        // Clean up the URL so the token isn't visible in the address bar
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );

        // Refresh to make sure all components see the logged in state
        window.location.reload();
      } catch (err) {
        console.error("Error saving auth data:", err);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes - User cannot access if already logged in */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Main Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/story/:id"
          element={
            <ProtectedRoute>
              <FeaturedStoryDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/destination/:name"
          element={
            <ProtectedRoute>
              <DestinationDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diary/:id"
          element={
            <ProtectedRoute>
              <DiaryDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateDiary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plan"
          element={
            <ProtectedRoute>
              <GroupTripPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/food"
          element={
            <ProtectedRoute>
              <FoodPage />
            </ProtectedRoute>
          }
        />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/stories" element={<CommunityStoriesPage />} />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <ExplorePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
