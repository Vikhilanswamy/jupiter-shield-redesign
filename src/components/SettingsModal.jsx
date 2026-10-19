import React, { useState } from "react";
import { X, Sliders, Shield, Zap, Info, Check } from "lucide-react";

export function SettingsModal({
  isOpen,
  onClose,
  slippage,
  setSlippage,
  customSlippage,
  setCustomSlippage,
  priorityFee,
  setPriorityFee,
  customPriorityFee,
  setCustomPriorityFee,
  mevProtection,
  setMevProtection
}) {
  if (!isOpen) return null;

  const slippagePresets = ["0.1", "0.5", "1.0"];
  const priorityPresets = [
    { id: "normal", label: "Normal", value: "0.00005 SOL", speed: "~1.5s" },
    { id: "turbo", label: "Turbo", value: "0.0005 SOL", speed: "< 500ms" },
    { id: "ultra", label: "Ultra", value: "0.002 SOL", speed: "< 250ms" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#111622] border border-[#232c3d] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1f2838]">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold text-white text-sm tracking-wide">Swap Execution Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a2333] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5 text-xs">
          {/* Slippage Tolerance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Max Slippage Tolerance</span>
              <span className="text-[11px] text-gray-400 font-mono">
                Active: {slippage === "custom" ? `${customSlippage || 0}%` : `${slippage}%`}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {slippagePresets.map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setSlippage(val);
                    setCustomSlippage("");
                  }}
                  className={`py-2 px-3 rounded-xl font-mono font-medium transition-all ${
                    slippage === val
                      ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-300"
                      : "bg-[#161d2b] border border-[#232d40] text-gray-400 hover:text-white hover:border-[#2f3d56]"
                  }`}
                >
                  {val}%
                </button>
              ))}
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Custom"
                  value={customSlippage}
                  onChange={(e) => {
                    setCustomSlippage(e.target.value);
                    setSlippage("custom");
                  }}
                  className={`w-full py-2 px-2.5 rounded-xl font-mono text-center text-white bg-[#161d2b] border transition-all focus:outline-none ${
                    slippage === "custom"
                      ? "border-emerald-500/50 text-emerald-300 ring-1 ring-emerald-500/20"
                      : "border-[#232d40] text-gray-300 placeholder-gray-500 focus:border-[#384863]"
                  }`}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 font-mono pointer-events-none">%</span>
              </div>
            </div>
            {Number(customSlippage) > 3.0 && (
              <p className="text-[10px] text-amber-400 font-medium">
                High slippage increases susceptibility to front-running.
              </p>
            )}
          </div>

          {/* Priority Gas Fees */}
          <div className="space-y-2 pt-2 border-t border-[#1b2333]">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Solana Priority Fee</span>
              <span className="text-[11px] text-gray-400 font-mono">
                {priorityPresets.find((p) => p.id === priorityFee)?.value || customPriorityFee}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {priorityPresets.map((preset) => {
                const isSelected = priorityFee === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setPriorityFee(preset.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                        : "bg-[#161d2b] border border-[#232d40] text-gray-400 hover:text-white hover:border-[#2f3d56]"
                    }`}
                  >
                    <div className="font-semibold text-white">{preset.label}</div>
                    <div className="text-[10px] font-mono text-gray-400 mt-0.5">{preset.value}</div>
                    <div className="text-[9px] text-emerald-400/80 mt-1">{preset.speed}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Jito MEV Bundle Toggle */}
          <div className="pt-2 border-t border-[#1b2333]">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#161d2b] border border-[#232d40]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Private Jito Bundle Routing</div>
                  <div className="text-[10px] text-gray-400">Direct-to-validator pipeline; 0 public mempool exposure</div>
                </div>
              </div>
              <button
                onClick={() => setMevProtection(!mevProtection)}
                className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  mevProtection ? "bg-emerald-500" : "bg-[#28354b]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    mevProtection ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0d121c] border-t border-[#1f2838] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
          >
            Apply Settings
          </button>
        </div>
      </div>
    </div>
  );
}
