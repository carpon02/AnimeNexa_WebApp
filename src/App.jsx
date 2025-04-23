import React from "react";
import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";

// Import your original components with their original names
import Onboarding from "./pages/Onboarding/Onboarding";
import WelcomePage from "./pages/Onboarding/WelcomePage";
import VerifyEmail from "./pages/Onboarding/VerifyEmail";
import EmailVerified from "./pages/Onboarding/EmailVerified";
import ConnectWallet from "./pages/Onboarding/ConnectWallet";
import ProfileData from "./pages/Onboarding/ProfileData";
import GenreInterests from "./pages/Onboarding/GenreInterests";
import NewsFeed from "./pages/NewsFeed";
import Reels from "./pages/Reels";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Clan from "./pages/Clan";
import Menu from "./pages/Menu";
import CreatePost from "./pages/CreatePost";
import CreateAccount from "./pages/Onboarding/CreateAccount";
import SignIn from "./pages/Onboarding/SignIn";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen  text-gray-800">
        <Routes>
          {/* Root Route - unchanged */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to="/news-feed" replace />
              </ProtectedRoute>
            }
          />

          {/* Onboarding Routes - keeping your original structure */}
          <Route path="/onboarding" element={<Onboarding />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="email-verified" element={<EmailVerified />} />
            <Route path="connect-wallet" element={<ConnectWallet />} />
            <Route path="profile" element={<ProfileData />} />
            <Route path="genres" element={<GenreInterests />} />
            <Route index element={<Navigate to="welcome" replace />} />
          </Route>

          {/* Main App Routes - unchanged */}
          <Route
            path="/news-feed"
            element={
              <ProtectedRoute>
                <NewsFeed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reels"
            element={
              <ProtectedRoute>
                <Reels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clan"
            element={
              <ProtectedRoute>
                <Clan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/menu"
            element={
              <ProtectedRoute>
                <Menu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          {/* Fallback Route - unchanged */}
          <Route path="*" element={<Navigate to="/news-feed" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;