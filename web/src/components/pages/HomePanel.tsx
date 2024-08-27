import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout, MdLogin } from "react-icons/md";
import { CgHello } from "react-icons/cg";
import { FaNoteSticky } from "react-icons/fa6";

const HomePanel: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-background relative flex min-w-lg max-w-xs flex-col gap-2 rounded-[0.5rem] p-2 animation-fadeIn">
        <div className="bg-card flex flex-col gap-4 rounded-lg p-4 shadow animation-fadeInDelay">
          <div className="text-foreground flex items-center justify-between">
            <h2 className="font-bold">Welcome!</h2>
            <CgHello />
          </div>
          <div className="text-muted-foreground flex items-center text-sm">
            <h2 className="font-[400]">
              Welcome to our banking system! Please choose an option below to either log in to your existing account or create a new one. We're here to help you manage your finances with ease and security.
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleLogin}
              className="justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all hover:brightness-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm animation-fadeInDelay h-9 px-3 py-2 flex items-center gap-2"
            >
              <MdLogin />
              Login
            </button>
            <button
              onClick={handleRegister}
              className="justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all hover:brightness-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm animation-fadeInDelay h-9 px-3 py-2 flex items-center gap-2"
            >
              <FaNoteSticky />
              Register
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <button
            className="justify-center whitespace-nowrap rounded-[0.375rem] text-sm font-medium transition-all hover:brightness-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm animation-fadeInDelay h-9 px-3 py-2 flex items-center gap-2"
          >
            <MdLogout />
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePanel;
