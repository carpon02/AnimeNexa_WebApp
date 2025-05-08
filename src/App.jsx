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
import Messages from "./pages/Messages";
import Clan from "./pages/Clan";
import CreatePost from "./pages/CreatePost";
import CreateAccount from "./pages/Onboarding/CreateAccount";
import SignIn from "./pages/Onboarding/SignIn";
import AddFriends from "./Components/AddFriends";
import Settings from "./Components/Settings";
import BlockedUSer from "./Components/BlockedUsers"; 
import CreateGroups from "./Components/CreateGroup";
import ArchiveChats from "./Components/ArchiveChats"; 
import About from "./Components/About";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";
import Contents from "./Components/Contents";
import Privacy from "./Components/Privacy";
import Rewards from "./Components/Rewards";
import Community from "./Components/Community";
import Display from "./Components/Display";
import Help from "./Components/Help";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedLayout from "./Components/ProtectedLayout"; // << Import this!
import ProfileView from "./pages/ProfileView";
import EditProfileView from "./Components/EditProfileView";

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
            <Route path="messages" element={<Messages />} />
            <Route path="messages/:chatId?" element={<Messages />} />
            <Route path="messages/add-friends" element={<AddFriends />} />
            <Route path="messages/create-groups" element={<CreateGroups />} />
            <Route path="messages/archive-chats" element={<ArchiveChats />} />
            <Route path="messages/blocked-users" element={<BlockedUSer />} />
            <Route path="messages/settings" element={<Settings />} />
            <Route path="messages/settings/account" element={<Account />} />
            <Route path="messages/settings/notifications" element={<Notifications />} />
            <Route path="messages/settings/content" element={<Contents />} />
            <Route path="messages/settings/privacy" element={<Privacy />} />
            <Route path="messages/settings/rewards" element={<Rewards />} />
            <Route path="messages/settings/community" element={<Community />} />
            <Route path="messages/settings/display" element={<Display />} />
            <Route path="messages/settings/help" element={<Help />} />
            <Route path="messages/settings/about" element={<About />} />
            <Route path="clan" element={<Clan />} />
            <Route path="profile-view" element={<ProfileView />} />
            <Route path="edit-profile" element={<EditProfileView />} />
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
