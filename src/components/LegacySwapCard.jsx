import React, { useState } from "react";
import { AlertCircle, Sliders, ChevronDown, RefreshCw, ArrowDownUp, Info, XCircle } from "lucide-react";

export function LegacySwapCard({ onSwitchToShield }) {
  const [activePin, setActivePin] = useState(1);

  const flaws = {
    1: {
      title: "Vertical Footprint & Fold Overflow",
      detail: "720px vertical height forces the swap button below the 640px mobile fold on iPhone 13/14/15/16. Requires continuous scrolling."
    },
    2: {
      title: "Cognitive Slippage Guesswork",
      detail: "Forces users to manually guess Basis Points (e.g. 50 bps vs 100 bps) without volatility context. Causes 14.2% slippage-exceeded aborts during surges."
    },
    3: {
      title: "Microscopic Pool Routing",
      detail: "Cryptic hexadecimal pool addresses and spaghetti diagrams create visual noise without communicating the actual dollar alpha delivered."
    },
    4: {
      title: "Opaque Priority Fee Sliders",
      detail: "Requires calculating micro-Lamports manually with no probability guarantee of next-block inclusion."
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span><strong>Legacy Jupiter v6 Teardown:</strong> 4 UX failure vectors active</span>
        </div>
        <button
          onClick={onSwitchToShield}
          className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-[11px] transition-colors shrink-0"
        >
          View Shield Fix →
        </button>
      </div>

      {/* Legacy Card Container */}
      <div className="bg-[#121620] border-2 border-dashed border-red-500/40 rounded-2xl p-4 space-y-3 relative text-gray-300 shadow-xl">
        {/* Header with Cluttered Icons */}
        <div className="flex items-center justify-between pb-2 border-b border-[#21293a] text-xs">
          <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px]">Legacy Swap (jup.ag)</span>
          <div className="flex items-center gap-2 text-gray-500">
            <span>v6.2.14</span>
            <RefreshCw className="w-3.5 h-3.5" />
            <Sliders className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Input 1 (Pay) */}
        <div className="relative p-3 rounded-xl bg-[#171d2b] border border-[#263145] space-y-1">
          {/* Critique Pin #2 */}
          <button
            onClick={() => setActivePin(2)}
            className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
              activePin === 2 ? "bg-red-500 text-white ring-4 ring-red-500/30" : "bg-red-500/80 text-white"
            }`}
            title="Inspect Slippage Flaw"
          >
            2
          </button>

          <div className="flex justify-between text-[11px] text-gray-500">
            <span>Selling</span>
            <span>Bal: 14.85 SOL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold font-mono text-gray-400">10</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#20293b] text-xs font-semibold text-white">
              <div className="w-4 h-4 rounded-full bg-purple-500 text-[10px] flex items-center justify-center font-bold">S</div>
              <span>SOL</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Invert Arrow */}
        <div className="flex justify-center -my-1">
          <div className="p-1 rounded bg-[#20293b] text-gray-400">
            <ArrowDownUp className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Input 2 (Receive) */}
        <div className="p-3 rounded-xl bg-[#171d2b] border border-[#263145] space-y-1">
          <div className="flex justify-between text-[11px] text-gray-500">
            <span>Buying (Estimated)</span>
            <span>Bal: 1,420.50 USDC</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold font-mono text-gray-400">1,842.50</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#20293b] text-xs font-semibold text-white">
              <div className="w-4 h-4 rounded-full bg-blue-500 text-[10px] flex items-center justify-center font-bold">$</div>
              <span>USDC</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Legacy Manual Slippage Box */}
        <div className="relative p-2.5 rounded-xl bg-[#141a27] border border-[#242f44] text-[11px] space-y-1.5">
          {/* Critique Pin #4 */}
          <button
            onClick={() => setActivePin(4)}
            className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
              activePin === 4 ? "bg-red-500 text-white ring-4 ring-red-500/30" : "bg-red-500/80 text-white"
            }`}
            title="Inspect Priority Fee Flaw"
          >
            4
          </button>

          <div className="flex items-center justify-between text-gray-400">
            <span>Manual Slippage (Bps)</span>
            <span className="text-amber-400 font-mono">0.5% (50 Bps)</span>
          </div>
          <div className="flex gap-1.5 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-[#1e2638] text-gray-400">0.1%</span>
            <span className="px-2 py-0.5 rounded bg-[#273248] text-white font-bold border border-gray-600">0.5%</span>
            <span className="px-2 py-0.5 rounded bg-[#1e2638] text-gray-400">1.0%</span>
            <span className="px-2 py-0.5 rounded bg-[#1e2638] text-gray-400">Custom</span>
          </div>
        </div>

        {/* Microscopic Spaghetti Route */}
        <div className="relative p-2.5 rounded-xl bg-[#141a27] border border-[#242f44] text-[10px] text-gray-400 space-y-1">
          {/* Critique Pin #3 */}
          <button
            onClick={() => setActivePin(3)}
            className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
              activePin === 3 ? "bg-red-500 text-white ring-4 ring-red-500/30" : "bg-red-500/80 text-white"
            }`}
            title="Inspect Routing Flaw"
          >
            3
          </button>

          <div className="font-semibold text-gray-300">Route Plan (3 AMMs)</div>
          <div className="font-mono text-[9px] text-gray-500 truncate">
            SOL &gt; Raydium (5D4...x9) &gt; Orca (Whirl...8c) &gt; USDC
          </div>
          <div className="text-[9px] text-gray-500">Price Impact: Unknown • Gas: 0.00012 SOL</div>
        </div>

        {/* Primary Swap Button pushed far down */}
        <div className="relative pt-2">
          {/* Critique Pin #1 */}
          <button
            onClick={() => setActivePin(1)}
            className={`absolute -top-1 -right-2.5 w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10 ${
              activePin === 1 ? "bg-red-500 text-white ring-4 ring-red-500/30" : "bg-red-500/80 text-white"
            }`}
            title="Inspect Viewport Height Flaw"
          >
            1
          </button>

          <button
            disabled
            className="w-full py-3 rounded-xl bg-gray-700/50 text-gray-400 text-xs font-semibold cursor-not-allowed border border-gray-600/40"
          >
            Swap (Manual Slippage 0.5%)
          </button>
        </div>
      </div>

      {/* Dynamic Flaw Inspector Drawer */}
      <div className="p-3.5 rounded-2xl bg-[#151b27] border border-red-500/30 space-y-1.5 text-xs">
        <div className="flex items-center gap-2 text-red-400 font-bold">
          <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[11px] flex items-center justify-center font-mono">
            {activePin}
          </span>
          <span>{flaws[activePin].title}</span>
        </div>
        <p className="text-gray-300 text-[11px] leading-relaxed">
          {flaws[activePin].detail}
        </p>
      </div>
    </div>
  );
}
