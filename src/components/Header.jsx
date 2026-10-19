import React from "react";
import { Shield, Sparkles, Smartphone, Monitor, BookOpen, ChevronDown, CheckCircle2 } from "lucide-react";

export function Header({
  isMobileFrame,
  setIsMobileFrame,
  isLegacyMode,
  setIsLegacyMode,
  onOpenCaseStudy,
  onOpenGallery,
  onOpenWallet
}) {
  return (
    <header className="border-b border-[#1c2433] bg-[#0c1017]/95 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Shield className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                JUPITER <span className="text-emerald-400">SHIELD</span>
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#16202e] text-gray-400 border border-[#233145]">
                v2.5
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">Zero-Slippage Anxiety & Private Jito MEV Routing</p>
          </div>
        </div>

        {/* Center: In-Place Mode & Viewport Toggle */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#121824] p-1 rounded-xl border border-[#20293b]">
          <button
            onClick={() => setIsLegacyMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              !isLegacyMode
                ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Shield
          </button>
          <button
            onClick={() => setIsLegacyMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isLegacyMode
                ? "bg-red-500/20 text-red-400 border border-red-500/30 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Legacy Breakdown (v6)
          </button>

          <div className="w-[1px] h-4 bg-[#20293b] mx-1" />

          {/* Viewport Mockup Toggles */}
          <button
            onClick={() => setIsMobileFrame(false)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              !isMobileFrame ? "bg-[#1f283a] text-white" : "text-gray-400 hover:text-white"
            }`}
            title="Desktop Canvas"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileFrame(true)}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isMobileFrame ? "bg-emerald-500 text-slate-950" : "text-gray-400 hover:text-white"
            }`}
            title="iPhone 16 Pro Viewport Mockup"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Network Status, Case Study CTA & Interactive Wallet */}
        <div className="flex items-center gap-2">
          {/* Solana TPS badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121824] border border-[#20293b] text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-gray-400 font-mono">2,840 TPS</span>
            <span className="text-[10px] text-emerald-400 font-medium">Optimal</span>
          </div>

          {/* Case Study Modal Trigger */}
          <button
            onClick={onOpenCaseStudy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#17202d] hover:bg-[#202c3e] text-xs font-medium text-gray-200 border border-[#243247] transition-all hover:border-emerald-500/40"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">UX Case Study</span>
            <span className="sm:hidden">Docs</span>
          </button>

          {/* Before/After Gallery Trigger */}
          <button
            onClick={onOpenGallery}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#131d2b] hover:bg-[#1b283b] text-xs font-medium text-sky-300 border border-[#22334a] transition-all hover:border-sky-400/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Before vs After</span>
            <span className="sm:hidden">Diff</span>
          </button>

          {/* Interactive Simulated Wallet Pill */}
          <button
            onClick={onOpenWallet}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#17202d] hover:bg-[#1f2b3d] border border-[#243247] hover:border-emerald-500/40 text-xs font-medium text-white shadow-sm transition-all"
            title="Click to view wallet details"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-400 font-bold">
              ◎
            </div>
            <span className="font-mono">14.85 SOL</span>
            <span className="text-gray-400 font-mono text-[11px] hidden sm:inline">| 7x2v...4d9f</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
