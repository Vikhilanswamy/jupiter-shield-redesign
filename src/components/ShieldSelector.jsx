import React from "react";
import { Shield, Zap, Lock } from "lucide-react";
import { SHIELD_PRESETS } from "../data/tokens";
import { playTick } from "../utils/sound";

export function ShieldSelector({ selectedShield, setSelectedShield }) {
  return (
    <div className="bg-[#121824] p-2.5 rounded-xl border border-[#1f293b] space-y-2">
      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 font-semibold text-gray-200">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Execution Shield</span>
        </div>
        <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Live Mempool Guard
        </span>
      </div>

      {/* Segmented Control - Compact & Wrap-Proof */}
      <div className="grid grid-cols-3 gap-1 bg-[#0d121c] p-1 rounded-lg border border-[#1b2333]">
        {SHIELD_PRESETS.map((preset) => {
          const isSelected = selectedShield.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => {
                playTick();
                setSelectedShield(preset);
              }}
              className={`py-1.5 px-1 rounded-md text-center transition-all ${
                isSelected
                  ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold shadow-sm"
                  : "text-gray-400 hover:text-white border border-transparent"
              }`}
            >
              <div className="text-[11px] leading-tight truncate">
                {preset.id === "turbo" ? "Turbo" : preset.id === "mev" ? "Jito MEV" : "Eco"}
              </div>
              <div className="text-[9px] font-mono opacity-75 mt-0.5">
                {preset.id === "turbo" ? "Adaptive" : preset.slippage}
              </div>
            </button>
          );
        })}
      </div>

      {/* 1-Line Dynamic Contextual Guarantee */}
      <div className="px-2.5 py-1.5 rounded-lg bg-[#0e1420] border border-[#1a2333] flex items-center justify-between text-[10px] text-gray-400 font-mono">
        <div className="flex items-center gap-1.5 truncate">
          {selectedShield.id === "mev" ? (
            <Lock className="w-3 h-3 text-purple-400 shrink-0" />
          ) : (
            <Zap className="w-3 h-3 text-emerald-400 shrink-0" />
          )}
          <span className="text-gray-300 truncate">
            {selectedShield.id === "mev"
              ? "Private Jito Relayer (Zero MEV)"
              : selectedShield.id === "turbo"
              ? "Adaptive Gas Scaling (< 500ms)"
              : "Standard Priority Fee (0.1%)"}
          </span>
        </div>
        <span className="text-emerald-400 font-semibold shrink-0 ml-2">
          {selectedShield.successRate}
        </span>
      </div>
    </div>
  );
}
