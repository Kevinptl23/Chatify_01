import { Eye, EyeOff, Loader2, Lock, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/slices/authSlice.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isLoggingIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-sans antialiased px-4 py-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* CENTERED LOGIN CARD */}
      <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl shadow-emerald-950/40 space-y-6 relative z-10">
        
        {/* WHATSAPP STYLE LOGO & HEADING */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366] shadow-xl shadow-[#25D366]/30 ring-4 ring-[#25D366]/20 mb-1 transition-transform hover:scale-105">
            <MessageCircle className="w-9 h-9 text-white fill-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome to Chatify
          </h1>
          <p className="text-slate-400 text-sm">
            Sign in to continue your conversations
          </p>
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition duration-200 text-sm"
                value={formData.email}
                placeholder="you@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full pl-11 pr-11 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition duration-200 text-sm"
                value={formData.password}
                placeholder="••••••••"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold py-3 px-4 rounded-xl transition duration-200 shadow-lg shadow-[#25D366]/20 flex justify-center items-center gap-2 text-sm disabled:opacity-50 mt-2"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-2 border-t border-slate-800/80">
          <p className="text-slate-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#25D366] hover:underline transition"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
