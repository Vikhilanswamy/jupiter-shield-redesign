import React, { useState, useEffect } from "react";
import { ArrowDownUp, RefreshCw, Settings, Sparkles, AlertCircle, ShieldCheck, ChevronDown, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { ShieldSelector } from "./ShieldSelector";
import { RouteVisualizer } from "./RouteVisualizer";
import { POPULAR_TOKENS, SHIELD_PRESETS } from "../data/tokens";

export function SwapCard({
  onSwapSuccess,
  isLegacyMode,
  openTokenModal
}) {
  const [fromToken, setFromToken] = useState(POPULAR_TOKENS[0]); // SOL
  const [toToken, setToToken] = useState(POPULAR_TOKENS[1]);   // USDC
  const [fromAmount, setFromAmount] = useState("10");
  const [selectedShield, setSelectedShield] = useState(SHIELD_PRESETS[1]); // Turbo
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapStep, setSwapStep] = useState(0);

  // Dynamic calculated toAmount based on token prices
  const toAmount = fromAmount && !isNaN(Number(fromAmount))
    ? ((Number(fromAmount) * fromToken.price) / toToken.price).toFixed(toToken.decimals === 5 ? 0 : 2)
    : "0.00";

  const handleInvert = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const handleExecuteSwap = () => {
    if (isSwapping || Number(fromAmount) <= 0) return;
    setIsSwapping(true);
    setSwapStep(1); // Simulating Jito Bundle

    setTimeout(() => {
      setSwapStep(2); // Simulating Execution
    }, 600);

    setTimeout(() => {
      setSwapStep(3); // Confirmed
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#c7f284", "#16a34a", "#38bdf8", "#ffffff"]
      });
      setIsSwapping(false);
      onSwapSuccess({
        fromToken,
        toToken,
        fromAmount,
        toAmount,
        shield: selectedShield
      });
    }, 1300);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      {/* Swap Container Card */}
      <div className="bg-[#10141e]/95 backdrop-blur-xl border border-[#20293b] rounded-3xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c7f284]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-white tracking-tight">Instant Swap</span>
            <span className="text-[10px] font-bold text-[#c7f284] bg-[#c7f284]/15 px-2 py-0.5 rounded-full border border-[#c7f284]/30">
              Zero-MEV Shield Active
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-gray-400">
            <button className="p-1.5 rounded-lg hover:bg-[#1a2130] hover:text-white transition-colors" title="Refresh Quote">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 rounded-lg hover:bg-[#1a2130] hover:text-white transition-colors" title="Settings">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pay Input Box */}
        <div className="bg-[#151b27] border border-[#222c3e] rounded-2xl p-3.5 space-y-2 hover:border-[#2f3d57] transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>You Pay</span>
            <div className="flex items-center gap-1">
              <span>Balance: <strong className="text-gray-200 font-mono">{fromToken.balance} {fromToken.symbol}</strong></span>
              <button
                onClick={() => setFromAmount(String(fromToken.balance))}
                className="text-[10px] font-bold text-[#c7f284] hover:underline uppercase ml-1"
              >
                Max
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-2xl sm:text-3xl font-extrabold text-white focus:outline-none w-full font-mono placeholder-gray-600"
            />

            <button
              onClick={() => openTokenModal("from", fromToken)}
              className="flex items-center gap-2 bg-[#1d2638] hover:bg-[#253249] border border-[#2d3b54] px-3 py-2 rounded-xl shrink-0 transition-all text-white shadow-sm"
            >
              <img src={fromToken.icon} alt={fromToken.symbol} className="w-6 h-6 rounded-full" />
              <span className="font-bold text-sm">{fromToken.symbol}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>≈ ${(Number(fromAmount || 0) * fromToken.price).toFixed(2)}</span>
            <div className="flex items-center gap-1">
              {["25%", "50%", "75%"].map((pct) => (
                <button
                  key={pct}
                  onClick={() => setFromAmount(((fromToken.balance * parseInt(pct)) / 100).toFixed(2))}
                  className="px-2 py-0.5 rounded bg-[#1c2434] hover:bg-[#263147] text-[10px] text-gray-400 hover:text-white"
                >
                  {pct}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Invert Swap Action Pill */}
        <div className="relative flex items-center justify-center -my-2.5 z-10">
          <button
            onClick={handleInvert}
            className="w-9 h-9 rounded-xl bg-[#1d2638] hover:bg-[#c7f284] border-2 border-[#10141e] text-gray-300 hover:text-[#0c0e14] flex items-center justify-center transition-all shadow-md group"
            title="Invert Tokens"
          >
            <ArrowDownUp className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
          </button>
        </div>

        {/* Receive Output Box */}
        <div className="bg-[#151b27] border border-[#222c3e] rounded-2xl p-3.5 space-y-2 hover:border-[#2f3d57] transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>You Receive (Estimated)</span>
            <span>Balance: <strong className="text-gray-200 font-mono">{toToken.balance} {toToken.symbol}</strong></span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <input
              type="text"
              readOnly
              value={toAmount}
              placeholder="0.00"
              className="bg-transparent text-2xl sm:text-3xl font-extrabold text-[#c7f284] focus:outline-none w-full font-mono placeholder-gray-600"
            />

            <button
              onClick={() => openTokenModal("to", toToken)}
              className="flex items-center gap-2 bg-[#1d2638] hover:bg-[#253249] border border-[#2d3b54] px-3 py-2 rounded-xl shrink-0 transition-all text-white shadow-sm"
            >
              <img src={toToken.icon} alt={toToken.symbol} className="w-6 h-6 rounded-full" />
              <span className="font-bold text-sm">{toToken.symbol}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>≈ ${(Number(toAmount || 0) * toToken.price).toFixed(2)}</span>
            <span className="text-[#c7f284] text-[11px] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Best Route Guaranteed
            </span>
          </div>
        </div>

        {/* Rate Bar */}
        <div className="mt-3 px-3 py-1.5 rounded-xl bg-[#141923] border border-[#222a3a] flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span>Rate</span>
          <span className="text-gray-200">
            1 {fromToken.symbol} ≈ {(fromToken.price / toToken.price).toFixed(toToken.decimals === 5 ? 0 : 4)} {toToken.symbol}
          </span>
        </div>

        {/* Interactive Shield Selector */}
        <div className="mt-3">
          <ShieldSelector selectedShield={selectedShield} setSelectedShield={setSelectedShield} />
        </div>

        {/* Route Visualizer */}
        <div className="mt-3">
          <RouteVisualizer
            fromToken={fromToken}
            toToken={toToken}
            fromAmount={fromAmount}
            toAmount={toAmount}
          />
        </div>

        {/* Swap Action Button */}
        <div className="mt-4">
          <button
            onClick={handleExecuteSwap}
            disabled={isSwapping || Number(fromAmount) <= 0}
            className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-xl transition-all ${
              isSwapping
                ? "bg-[#1f2838] text-gray-400 cursor-wait border border-[#2a364d]"
                : Number(fromAmount) <= 0
                ? "bg-[#18202d] text-gray-500 cursor-not-allowed border border-[#242f42]"
                : "bg-gradient-to-r from-[#c7f284] via-[#b5e56e] to-[#86efac] text-[#0c0e14] hover:shadow-[#c7f284]/25 hover:scale-[1.01] active:scale-[0.99] glow-jup"
            }`}
          >
            {isSwapping ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#c7f284]" />
                <span>
                  {swapStep === 1 && "Routing via Jito MEV Bundle..."}
                  {swapStep === 2 && "Validating Zero-Slippage Execution..."}
                  {swapStep === 3 && "Finalizing Swap..."}
                </span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                <span>Swap with {selectedShield.name}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
