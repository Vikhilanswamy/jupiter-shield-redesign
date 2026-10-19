import React from "react";
import { GitCommit, TrendingUp, Sparkles, Check, ArrowRight } from "lucide-react";

export function RouteVisualizer({ fromToken, toToken, fromAmount, toAmount }) {
  const routes = [
    { dex: "Meteora DLMM", share: "55%", fee: "0.01%", color: "border-emerald-500/40 text-emerald-400" },
    { dex: "Raydium CLMM", share: "30%", fee: "0.04%", color: "border-blue-500/40 text-blue-400" },
    { dex: "Orca Whirlpool", share: "15%", fee: "0.02%", color: "border-purple-500/40 text-purple-400" }
  ];

  return (
    <div className="bg-[#121620] p-3.5 rounded-2xl border border-[#21293a] space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-gray-200">
          <GitCommit className="w-3.5 h-3.5 text-[#c7f284]" />
          <span>Optimal Smart Routing</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-[#c7f284] bg-[#c7f284]/10 px-2 py-0.5 rounded-full font-medium border border-[#c7f284]/20">
          <Sparkles className="w-3 h-3" />
          <span>+$4.18 Extra vs Single Pool</span>
        </div>
      </div>

      {/* Visual Multi-Hop Node Pipeline */}
      <div className="relative py-2 px-1">
        <div className="flex items-center justify-between gap-2">
          {/* Input Node */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#171d2b] border border-[#283347] text-xs font-semibold shrink-0">
            <img src={fromToken.icon} alt={fromToken.symbol} className="w-4 h-4 rounded-full" />
            <span>{fromToken.symbol}</span>
          </div>

          {/* Splitting Paths */}
          <div className="flex-1 grid grid-cols-3 gap-1.5">
            {routes.map((route, i) => (
              <div
                key={i}
                className={`p-1.5 rounded-lg bg-[#151b26] border ${route.color} text-center flex flex-col justify-center relative overflow-hidden`}
              >
                <div className="text-[10px] font-bold text-gray-200 truncate">{route.dex}</div>
                <div className="text-[9px] font-mono text-gray-400 flex items-center justify-center gap-1">
                  <span>{route.share}</span>
                  <span className="text-gray-500">•</span>
                  <span>{route.fee}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Output Node */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#171d2b] border border-[#283347] text-xs font-semibold shrink-0">
            <img src={toToken.icon} alt={toToken.symbol} className="w-4 h-4 rounded-full" />
            <span>{toToken.symbol}</span>
          </div>
        </div>
      </div>

      {/* Execution Metrics Footer */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#1e2638] text-[11px]">
        <div>
          <span className="text-gray-500 block text-[10px]">Price Impact</span>
          <span className="text-emerald-400 font-semibold">&lt; 0.01%</span>
        </div>
        <div>
          <span className="text-gray-500 block text-[10px]">Min. Received</span>
          <span className="text-gray-200 font-mono font-medium">
            {(toAmount * 0.998).toFixed(2)} {toToken.symbol}
          </span>
        </div>
        <div>
          <span className="text-gray-500 block text-[10px]">Network Fee</span>
          <span className="text-gray-200 font-mono font-medium">~0.00005 SOL</span>
        </div>
      </div>
    </div>
  );
}
