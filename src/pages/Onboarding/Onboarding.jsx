// src/pages/Onboarding/Onboarding.jsx
import { Outlet } from 'react-router-dom';
// import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { FaArrowLeft } from "react-icons/fa";

const Onboarding = () => {
//   const navigate = useNavigate();
//   const showBackButton = !window.location.pathname.endsWith('/onboarding/verify-email');

  return (
    <div>
       {/* Main content area */}
      
        <div>
          <Outlet /> {/* This renders the nested routes */}
        </div>
     

    </div>
  );
};

export default Onboarding;