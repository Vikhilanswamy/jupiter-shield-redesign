import React from "react";
import { Shield, Sparkles, Smartphone, Monitor, BookOpen, Wallet, ChevronDown, Activity } from "lucide-react";

export function Header({
  isMobileFrame,
  setIsMobileFrame,
  isLegacyMode,
  setIsLegacyMode,
  onOpenCaseStudy
}) {
  return (
    <header className="border-b border-[#1c2230] bg-[#0c0e14]/90 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#c7f284] to-[#16a34a] shadow-lg shadow-[#c7f284]/20">
            <Shield className="w-5 h-5 text-[#0c0e14] stroke-[2.5]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#38bdf8] border-2 border-[#0c0e14] animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                JUPITER <span className="text-[#c7f284]">SHIELD</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#c7f284]/15 text-[#c7f284] border border-[#c7f284]/30 uppercase">
                Redesign v2.5
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">Zero-Slippage Anxiety & Intelligent MEV Protection</p>
          </div>
        </div>

        {/* Center: Interactive Mode & Viewport Controls */}
        <div className="hidden md:flex items-center gap-2 bg-[#141923] p-1 rounded-xl border border-[#232b3d]">
          {/* Legacy vs Next-Gen Toggle */}
          <button
            onClick={() => setIsLegacyMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isLegacyMode
                ? "bg-[#c7f284] text-[#0c0e14] shadow-sm font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Shield
          </button>
          <button
            onClick={() => setIsLegacyMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isLegacyMode
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Legacy Breakdown
          </button>

          <div className="w-[1px] h-4 bg-[#232b3d] mx-1" />

          {/* Device Mockup Toggle */}
          <button
            onClick={() => setIsMobileFrame(false)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              !isMobileFrame ? "bg-[#232b3d] text-white" : "text-gray-400 hover:text-white"
            }`}
            title="Desktop Canvas"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileFrame(true)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isMobileFrame ? "bg-[#c7f284] text-[#0c0e14]" : "text-gray-400 hover:text-white"
            }`}
            title="Mobile iPhone Frame Mockup"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Network Status, Case Study CTA & Wallet */}
        <div className="flex items-center gap-2.5">
          {/* Solana TPS badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141923] border border-[#232b3d] text-xs">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-gray-400 font-mono">2,840 TPS</span>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">Optimal</span>
          </div>

          {/* Case Study Modal Trigger */}
          <button
            onClick={onOpenCaseStudy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1d2433] hover:bg-[#252f42] text-xs font-semibold text-gray-200 border border-[#2e394f] transition-all hover:border-[#c7f284]/50"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#c7f284]" />
            <span className="hidden sm:inline">UX Case Study</span>
            <span className="sm:hidden">Docs</span>
          </button>

          {/* Simulated Wallet Pill */}
          <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#1e2738] to-[#161d2b] border border-[#2c374d] hover:border-[#c7f284]/40 text-xs font-medium text-white shadow-sm transition-all">
            <div className="w-5 h-5 rounded-full bg-[#c7f284]/20 flex items-center justify-center text-[10px] text-[#c7f284] font-bold">
              ◎
            </div>
            <span className="font-mono">14.85 SOL</span>
            <span className="text-gray-500 font-mono text-[11px]">| 7x2v...9d4f</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
