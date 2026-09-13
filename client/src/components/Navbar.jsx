import { LogOut, MessageCircle, Settings, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/slices/authSlice.js";


import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { authUser } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            {/* LEFT LOGO */}
            <div className="flex items-center gap-8">
              <Link
                to={"/"}
                className="flex items-center gap-2.5 hover:opacity-80 transition"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] shadow-sm shadow-[#25D366]/40 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white fill-white" />
                </div>
                <h1 className="text-lg font-bold text-gray-900 tracking-tight">Chatify</h1>
              </Link>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              {authUser && (
                <>
                  <Link
                    to={"/profile"}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    <User className="w-5 h-6" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-red-700 hover:bg-red-100 transition"
                  >
                    <LogOut className="w-5 h-6" />
                    <span className="hidden sm:inline">Log-out</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
