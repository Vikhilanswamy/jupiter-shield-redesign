import React from "react";
import { AlertCircle, X, CheckCircle2, ArrowRight } from "lucide-react";

export function LegacyComparisonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#121622] border border-[#273247] w-full max-w-2xl rounded-3xl shadow-2xl p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white bg-[#1a2130] hover:bg-[#232c3f] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            Legacy UX Teardown
          </div>
          <h3 className="text-xl font-extrabold text-white">Why Current Solana Swaps Induce Anxiety</h3>
          <p className="text-xs text-gray-400">
            A direct critique of existing Jupiter interface friction points and how Jupiter Shield resolves each.
          </p>
        </div>

        <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
          {[
            {
              title: "1. The Slippage Trap (Bps Slider)",
              legacy: "Users must guess between 0.1% to 1.5% or enter Basis Points. Set it too low: your swap fails and you lose gas. Set it too high: toxic searchers front-run your swap and take your profit.",
              shield: "Auto-Shield adapts priority gas in real-time or routes via Jito's private block engine, eliminating sandwich bot exposure entirely."
            },
            {
              title: "2. Cluttered Multi-Hop Visualizer",
              legacy: "A sprawling graph of 4+ liquidity pools (Raydium, Orca, Meteora, Phoenix) with micro-text and confusing percentage arrows crowds the mobile viewport.",
              shield: "A clean 3-node pipeline showing the high-level split and the most important user metric: '+$4.18 Extra Saved vs Single DEX'."
            },
            {
              title: "3. Disconnected Gas vs Slippage Controls",
              legacy: "Users must open two separate sub-modals: one for Priority Gas Lamports and another for Slippage Tolerance, creating cognitive friction.",
              shield: "Unified into 3 human-readable Shield Presets: Eco, Dynamic Turbo, and Jito Anti-Sandwich."
            },
            {
              title: "4. No Memorable Post-Swap Feedback",
              legacy: "A 3-second toast disappears, leaving users wondering whether they got good execution or suffered slippage loss.",
              shield: "An interactive Victory Receipt with exact dollar savings, millisecond execution speed, and 1-click sharing to X/Telegram."
            }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#161c29] border border-[#242e42] space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#20293d] flex items-center justify-center text-[10px] text-[#c7f284] font-bold">
                  {i + 1}
                </span>
                {item.title}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
                  <span className="font-bold block text-red-400 mb-1">❌ Legacy Pain Point:</span>
                  {item.legacy}
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <span className="font-bold block text-emerald-400 mb-1">✅ Jupiter Shield Fix:</span>
                  {item.shield}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[#20293b] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#c7f284] text-[#0c0e14] font-bold text-xs hover:bg-[#b5e370] transition-colors"
          >
            Explore Interactive Shield Prototype
          </button>
        </div>
      </div>
    </div>
  );
}
