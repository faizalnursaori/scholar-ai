import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../../utils/services/auth";
import type { UserData } from "../../utils/types";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start flex gap-2">
        <div className="dropdown">
          <label tabIndex={0} className="hover:cursor-pointer lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/scholarships">Scholarships</Link>
            </li>
            <li>
              <Link to="/ai-assistant">AI Assistant</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {currentUser && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold text-primary">
          ScholarAI
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scholarships">Scholarships</Link>
          </li>
          <li>
            <Link to="/ai-assistant">AI Assistant</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {currentUser && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-base-200 cursor-pointer"
            >
              <span className="font-medium">Hello, {currentUser.first_name}!</span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44"
            >
              <li>
                <Link to="/profile" className="hover:bg-base-200 rounded-md">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:bg-base-200 rounded-md">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost rounded-md">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary rounded-md ml-2">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
