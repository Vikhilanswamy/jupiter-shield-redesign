import React from "react";
import { Shield, Zap, Lock, Info, CheckCircle2 } from "lucide-react";
import { SHIELD_PRESETS } from "../data/tokens";

export function ShieldSelector({ selectedShield, setSelectedShield }) {
  return (
    <div className="bg-[#121620] p-3.5 rounded-2xl border border-[#21293a] space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-gray-200">
          <Shield className="w-3.5 h-3.5 text-[#c7f284]" />
          <span>Execution Shield Mode</span>
        </div>
        <span className="text-[11px] text-gray-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          Real-time Mempool Protection
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {SHIELD_PRESETS.map((preset) => {
          const isSelected = selectedShield.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setSelectedShield(preset)}
              className={`text-left p-2.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                isSelected
                  ? "bg-[#18212e] border-[#c7f284] shadow-md shadow-[#c7f284]/10"
                  : "bg-[#141923] border-[#222a3b] hover:border-[#313c54] opacity-80 hover:opacity-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    preset.id === "turbo"
                      ? "bg-[#c7f284]/15 text-[#c7f284]"
                      : preset.id === "mev"
                      ? "bg-purple-500/15 text-purple-400"
                      : "bg-blue-500/15 text-blue-400"
                  }`}>
                    {preset.badge}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#c7f284]" />}
                </div>

                <div className="font-bold text-xs text-white">{preset.name}</div>
                <div className="text-[11px] text-gray-400 mt-0.5 font-mono">{preset.slippage}</div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-[#232c3e] flex items-center justify-between text-[10px] text-gray-400">
                <span>{preset.speed}</span>
                <span className="text-emerald-400 font-semibold">{preset.successRate}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Shield Summary & Guarantee Pill */}
      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#171d2b] border border-[#263145] text-[11px]">
        <div className="flex items-center gap-2">
          {selectedShield.id === "mev" ? (
            <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          ) : (
            <Zap className="w-3.5 h-3.5 text-[#c7f284] shrink-0" />
          )}
          <span className="text-gray-300 font-medium">
            {selectedShield.description}
          </span>
        </div>
        <div className="shrink-0 text-[10px] font-mono text-gray-400 ml-2">
          Fee: <span className="text-gray-200">{selectedShield.priorityFee}</span>
        </div>
      </div>
    </div>
  );
}
