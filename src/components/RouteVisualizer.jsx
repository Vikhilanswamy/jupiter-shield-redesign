import React from "react";
import { GitCommit, Sparkles } from "lucide-react";

export function RouteVisualizer({ fromToken, toToken, fromAmount, toAmount }) {
  const routes = [
    { name: "Meteora DLMM", share: 55, fee: "0.01%", color: "bg-emerald-400 text-emerald-300" },
    { name: "Raydium CLMM", share: 30, fee: "0.04%", color: "bg-sky-400 text-sky-300" },
    { name: "Orca Whirlpool", share: 15, fee: "0.02%", color: "bg-purple-400 text-purple-300" }
  ];

  const numToAmount = Number(toAmount) || 0;
  const decimals = toToken.symbol === "SOL" ? 4 : toToken.decimals === 5 ? 0 : 2;
  const minReceived = (numToAmount * 0.998).toFixed(decimals);

  return (
    <div className="bg-[#121824] p-2.5 rounded-xl border border-[#1f293b] space-y-2">
      {/* Header */}
      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 font-semibold text-gray-200">
          <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
          <span>Smart Split Route</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono border border-emerald-500/20">
          <Sparkles className="w-2.5 h-2.5" />
          <span>+$4.18 vs single DEX</span>
        </div>
      </div>

      {/* Segmented Visual Pipeline Bar */}
      <div className="space-y-1.5">
        <div className="w-full h-1.5 rounded-full overflow-hidden flex bg-[#1b2333]">
          <div style={{ width: "55%" }} className="bg-emerald-400 h-full" title="Meteora 55%" />
          <div style={{ width: "30%" }} className="bg-sky-400 h-full" title="Raydium 30%" />
          <div style={{ width: "15%" }} className="bg-purple-400 h-full" title="Orca 15%" />
        </div>

        {/* Route Labels - Clean, No Truncation */}
        <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Meteora 55%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Raydium 30%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Orca 15%</span>
          </div>
        </div>
      </div>

      {/* Execution Metrics Row */}
      <div className="grid grid-cols-3 gap-2 pt-1.5 border-t border-[#1a2333] text-[10px] font-mono">
        <div>
          <span className="text-gray-500 block text-[9px] uppercase">Price Impact</span>
          <span className="text-emerald-400 font-medium">&lt; 0.01%</span>
        </div>
        <div>
          <span className="text-gray-500 block text-[9px] uppercase">Min Received</span>
          <span className="text-gray-200 font-medium">
            {minReceived} {toToken.symbol}
          </span>
        </div>
        <div>
          <span className="text-gray-500 block text-[9px] uppercase">Network Fee</span>
          <span className="text-gray-200 font-medium">~0.00005 SOL</span>
        </div>
      </div>
    </div>
  );
}
