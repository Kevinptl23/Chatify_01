import { MessageCircle, Shield, Zap, Sparkles } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-12 text-white">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Main Glassmorphic Showcase Card */}
      <div className="relative w-full max-w-lg bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-indigo-950/50 space-y-6">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Chatify Messenger</h3>
              <p className="text-xs text-blue-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Network Active
              </p>
            </div>
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Fast & Secure
          </span>
        </div>

        {/* Interactive Chat Bubble Mockups */}
        <div className="space-y-4 py-2">
          {/* Left Incoming Message */}
          <div className="flex items-end gap-3 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0">
              AI
            </div>
            <div className="bg-slate-800/80 border border-white/10 rounded-2xl rounded-bl-none p-3.5 text-sm text-slate-200 shadow-md">
              <p>Hey! Ready to experience seamless real-time chat? 🚀</p>
              <span className="text-[10px] text-slate-400 mt-1 block text-right">Just now</span>
            </div>
          </div>

          {/* Right Outgoing Message */}
          <div className="flex items-end justify-end gap-3 max-w-[85%] ml-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rounded-br-none p-3.5 text-sm text-white shadow-lg shadow-blue-500/20">
              <p>Absolutely! The new UI looks incredibly professional! ✨</p>
              <span className="text-[10px] text-blue-200 mt-1 block text-right">Just now • Delivered</span>
            </div>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-slate-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Instant Socket Messaging</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-slate-300">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Authentication</span>
          </div>
        </div>
      </div>

      {/* Title & Subtitle below card */}
      <div className="mt-8 text-center max-w-md space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
