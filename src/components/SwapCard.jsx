import React, { useState } from "react";
import { ArrowDownUp, RefreshCw, Settings, Sparkles, AlertCircle, ShieldCheck, ChevronDown, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { ShieldSelector } from "./ShieldSelector";
import { RouteVisualizer } from "./RouteVisualizer";
import { SettingsModal } from "./SettingsModal";
import { SHIELD_PRESETS } from "../data/tokens";
import { playSuccessChime, playTick } from "../utils/sound";

export function SwapCard({
  fromToken,
  setFromToken,
  toToken,
  setToToken,
  onSwapSuccess,
  openTokenModal
}) {
  const [fromAmount, setFromAmount] = useState("10");
  const [selectedShield, setSelectedShield] = useState(SHIELD_PRESETS[1]); // Turbo
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapStep, setSwapStep] = useState(0);

  // Settings State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [slippage, setSlippage] = useState("0.5");
  const [customSlippage, setCustomSlippage] = useState("");
  const [priorityFee, setPriorityFee] = useState("turbo");
  const [customPriorityFee, setCustomPriorityFee] = useState("");
  const [mevProtection, setMevProtection] = useState(true);

  // Refresh State
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [quoteTimestamp, setQuoteTimestamp] = useState("Just now");

  const numFromAmount = Number(fromAmount) || 0;
  const isInsufficientBalance = numFromAmount > fromToken.balance;

  // Dynamic calculated toAmount
  const toAmount = fromAmount && !isNaN(numFromAmount) && numFromAmount > 0
    ? ((numFromAmount * fromToken.price) / toToken.price).toFixed(toToken.decimals === 5 ? 0 : 2)
    : "0.00";

  const handleInvert = () => {
    playTick();
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const handleRefreshQuote = () => {
    if (isRefreshing) return;
    playTick();
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setQuoteTimestamp("Just now");
    }, 450);
  };

  const handleExecuteSwap = () => {
    if (isSwapping || numFromAmount <= 0 || isInsufficientBalance) return;
    setIsSwapping(true);
    setSwapStep(1); // Simulating Jito Bundle

    setTimeout(() => {
      setSwapStep(2); // Simulating Execution
    }, 600);

    setTimeout(() => {
      setSwapStep(3); // Confirmed
      playSuccessChime();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#34d399", "#38bdf8", "#ffffff"]
      });
      setIsSwapping(false);
      onSwapSuccess({
        fromToken,
        toToken,
        fromAmount,
        toAmount,
        shield: selectedShield,
        slippage: slippage === "custom" ? customSlippage : slippage,
        priorityFee
      });
    }, 1300);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      {/* Swap Container Card */}
      <div className="bg-[#10141f] border border-[#1f2838] rounded-2xl p-4 sm:p-5 shadow-2xl relative">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-white tracking-tight">Instant Swap</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              MEV Shield: Active
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <button
              onClick={handleRefreshQuote}
              className={`p-1.5 rounded-lg hover:bg-[#18202e] hover:text-white transition-all ${
                isRefreshing ? "text-emerald-400" : ""
              }`}
              title="Refresh Quote"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={() => {
                playTick();
                setIsSettingsOpen(true);
              }}
              className="p-1.5 rounded-lg hover:bg-[#18202e] hover:text-white transition-colors"
              title="Execution Settings"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pay Input Box */}
        <div
          className={`bg-[#141a26] border rounded-xl p-3.5 space-y-2 transition-all ${
            isInsufficientBalance
              ? "border-red-500/50 bg-red-500/[0.03]"
              : "border-[#212a3b] hover:border-[#2d3a52]"
          }`}
        >
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-medium">You Pay</span>
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <span>Balance: <strong className="text-gray-200">{fromToken.balance} {fromToken.symbol}</strong></span>
              <button
                onClick={() => {
                  playTick();
                  setFromAmount(String(fromToken.balance));
                }}
                className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 uppercase ml-1"
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
              className="bg-transparent text-2xl sm:text-3xl font-bold text-white focus:outline-none w-full font-mono placeholder-gray-600"
            />

            <button
              onClick={() => openTokenModal("from", fromToken)}
              className="flex items-center gap-2 bg-[#1b2333] hover:bg-[#232e42] border border-[#28354c] px-3 py-2 rounded-xl shrink-0 transition-all text-white shadow-sm"
            >
              <img src={fromToken.icon} alt={fromToken.symbol} className="w-5 h-5 rounded-full" />
              <span className="font-semibold text-xs sm:text-sm">{fromToken.symbol}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>≈ ${(numFromAmount * fromToken.price).toFixed(2)}</span>
            <div className="flex items-center gap-1">
              {["25%", "50%", "75%"].map((pct) => (
                <button
                  key={pct}
                  onClick={() => {
                    playTick();
                    setFromAmount(((fromToken.balance * parseInt(pct)) / 100).toFixed(2));
                  }}
                  className="px-2 py-0.5 rounded bg-[#1c2434] hover:bg-[#263147] text-[10px] text-gray-400 hover:text-white"
                >
                  {pct}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Invert Swap Action Button */}
        <div className="relative flex items-center justify-center -my-2.5 z-10">
          <button
            onClick={handleInvert}
            className="w-8 h-8 rounded-lg bg-[#1a2232] hover:bg-emerald-500 border-2 border-[#10141f] text-gray-300 hover:text-slate-950 flex items-center justify-center transition-all shadow-md group"
            title="Invert tokens"
          >
            <ArrowDownUp className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" />
          </button>
        </div>

        {/* Receive Output Box */}
        <div className="bg-[#141a26] border border-[#212a3b] rounded-xl p-3.5 space-y-2 hover:border-[#2d3a52] transition-all">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-medium">You Receive (Estimated)</span>
            <span className="font-mono text-[11px]">
              Balance: <strong className="text-gray-200">{toToken.balance} {toToken.symbol}</strong>
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div
              className={`text-2xl sm:text-3xl font-bold font-mono text-emerald-400 transition-opacity duration-200 ${
                isRefreshing ? "opacity-40" : "opacity-100"
              }`}
            >
              {toAmount}
            </div>

            <button
              onClick={() => openTokenModal("to", toToken)}
              className="flex items-center gap-2 bg-[#1b2333] hover:bg-[#232e42] border border-[#28354c] px-3 py-2 rounded-xl shrink-0 transition-all text-white shadow-sm"
            >
              <img src={toToken.icon} alt={toToken.symbol} className="w-5 h-5 rounded-full" />
              <span className="font-semibold text-xs sm:text-sm">{toToken.symbol}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>≈ ${(Number(toAmount || 0) * toToken.price).toFixed(2)}</span>
            <span className="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Best Route Verified
            </span>
          </div>
        </div>

        {/* Rate & Quote freshness bar */}
        <div className="mt-3 px-3 py-1.5 rounded-lg bg-[#131924] border border-[#1e2637] flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span>Rate</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-200">
              1 {fromToken.symbol} ≈ {(fromToken.price / toToken.price).toFixed(toToken.decimals === 5 ? 0 : 4)} {toToken.symbol}
            </span>
            <span className="text-[10px] text-gray-500">({quoteTimestamp})</span>
          </div>
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

        {/* Swap Action Button with Validation */}
        <div className="mt-4">
          <button
            onClick={handleExecuteSwap}
            disabled={isSwapping || numFromAmount <= 0 || isInsufficientBalance}
            className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all ${
              isInsufficientBalance
                ? "bg-red-500/10 text-red-400 border border-red-500/30 cursor-not-allowed"
                : isSwapping
                ? "bg-[#1b2332] text-gray-400 cursor-wait border border-[#273347]"
                : numFromAmount <= 0
                ? "bg-[#161d2a] text-gray-500 cursor-not-allowed border border-[#222c3d]"
                : "bg-emerald-400 hover:bg-emerald-300 text-slate-950 hover:shadow-emerald-500/20 active:scale-[0.99]"
            }`}
          >
            {isInsufficientBalance ? (
              <>
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span>Insufficient {fromToken.symbol} Balance</span>
              </>
            ) : isSwapping ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                <span>
                  {swapStep === 1 && "Submitting via Jito Private Relayer..."}
                  {swapStep === 2 && "Validating Zero-Slippage Invariance..."}
                  {swapStep === 3 && "Finalizing Settlement..."}
                </span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Swap via {selectedShield.name}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Execution Settings Drawer/Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        slippage={slippage}
        setSlippage={setSlippage}
        customSlippage={customSlippage}
        setCustomSlippage={setCustomSlippage}
        priorityFee={priorityFee}
        setPriorityFee={setPriorityFee}
        customPriorityFee={customPriorityFee}
        setCustomPriorityFee={setCustomPriorityFee}
        mevProtection={mevProtection}
        setMevProtection={setMevProtection}
      />
    </div>
  );
}
