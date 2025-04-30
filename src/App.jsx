import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
import ProtectedLayout from "./Components/ProtectedLayout"; // << Import this!

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-gray-800">
        <Routes>
          {/* Root Redirect */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to="/news-feed" replace />
              </ProtectedRoute>
            }
          />

          {/* Onboarding Routes */}
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

          {/* Main Protected App Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="news-feed" element={<NewsFeed />} />
            <Route path="reels" element={<Reels />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/:chatId?" element={<Messages />} />
            <Route path="clan" element={<Clan />} />
            <Route path="menu" element={<Menu />} />
            <Route path="create-post" element={<CreatePost />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/news-feed" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
