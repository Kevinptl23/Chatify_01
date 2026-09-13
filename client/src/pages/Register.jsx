import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageCircle,
  User,
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../store/slices/authSlice.js";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { isSigningUp } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-800 font-sans antialiased px-4 py-12 relative overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* CENTERED LIGHT REGISTER CARD */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/80 space-y-6 relative z-10">
        
        {/* WHATSAPP STYLE GREEN LOGO & HEADING */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/30 ring-4 ring-[#25D366]/20 mb-1 transition-transform hover:scale-105">
            <MessageCircle className="w-9 h-9 text-white fill-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Create Your Account
          </h1>
          <p className="text-slate-500 text-sm">
            Get started with Chatify for free
          </p>
        </div>

        {/* REGISTER FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <User className="w-5 h-5" />
              </span>
              <input
                type="text"
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] transition duration-200 text-sm font-medium"
                value={formData.fullName}
                placeholder="John Doe"
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] transition duration-200 text-sm font-medium"
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
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] transition duration-200 text-sm font-medium"
                value={formData.password}
                placeholder="•••••••• (Min 8 chars)"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
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
            disabled={isSigningUp}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 shadow-md shadow-[#25D366]/30 flex justify-center items-center gap-2 text-sm disabled:opacity-50 mt-2"
          >
            {isSigningUp ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#25D366] hover:underline transition"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
