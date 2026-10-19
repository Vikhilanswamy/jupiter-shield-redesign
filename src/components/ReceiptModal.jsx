import React from "react";
import { CheckCircle2, ShieldCheck, Share2, ExternalLink, Copy, X, Sparkles, TrendingUp } from "lucide-react";

export function ReceiptModal({ isOpen, onClose, txData }) {
  if (!isOpen || !txData) return null;

  const handleShareX = () => {
    const text = encodeURIComponent(
      `Just swapped ${txData.fromAmount} ${txData.fromToken.symbol} on @JupiterExchange Shield!\n\n` +
      `⚡ Execution: ${txData.shield.name} (< 400ms)\n` +
      `🛡️ MEV Protection: 100% Sandwich-Proof\n` +
      `💰 Routing Benefit: +$4.18 saved vs single pool\n\n` +
      `Redesigned for @SuperteamIndia Bounty 🚀`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gradient-to-b from-[#141b29] to-[#0f141f] border border-[#2b374c] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white bg-[#1a2333] hover:bg-[#232f45] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Celebration Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#16a34a] to-[#c7f284] flex items-center justify-center shadow-lg shadow-[#c7f284]/20">
            <CheckCircle2 className="w-9 h-9 text-[#0c0e14] stroke-[2.5]" />
          </div>
          <h3 className="text-xl font-extrabold text-white tracking-tight">Swap Confirmed!</h3>
          <p className="text-xs text-gray-400">
            Executed with <span className="text-[#c7f284] font-semibold">{txData.shield.name}</span> in <span className="text-white font-mono">380ms</span>
          </p>
        </div>

        {/* Amount Exchange Card */}
        <div className="mt-5 p-4 rounded-2xl bg-[#17202e] border border-[#273347] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={txData.fromToken.icon} alt="" className="w-7 h-7 rounded-full" />
              <div>
                <div className="text-xs text-gray-400">You Paid</div>
                <div className="text-sm font-bold text-white font-mono">
                  {txData.fromAmount} {txData.fromToken.symbol}
                </div>
              </div>
            </div>
            <div className="text-right text-xs text-gray-400 font-mono">
              ${(txData.fromAmount * txData.fromToken.price).toFixed(2)}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-[#253043]" />
            <div className="absolute px-2 bg-[#17202e] text-[10px] text-[#c7f284] font-bold tracking-wider uppercase">
              100% MEV Shielded
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={txData.toToken.icon} alt="" className="w-7 h-7 rounded-full" />
              <div>
                <div className="text-xs text-gray-400">You Received</div>
                <div className="text-sm font-bold text-[#c7f284] font-mono">
                  {txData.toAmount} {txData.toToken.symbol}
                </div>
              </div>
            </div>
            <div className="text-right text-xs text-[#c7f284] font-mono font-semibold">
              ${(txData.toAmount * txData.toToken.price).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Value Gain Banner */}
        <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/15 to-transparent border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Optimal Split Routing Savings</span>
          </div>
          <span className="font-mono font-bold text-emerald-300">+$4.18 Extra</span>
        </div>

        {/* Transaction Metadata */}
        <div className="mt-3 p-3 rounded-xl bg-[#121722] border border-[#212b3c] space-y-1.5 text-[11px] text-gray-400 font-mono">
          <div className="flex items-center justify-between">
            <span>Block Slot</span>
            <span className="text-gray-200">#294,812,041</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Slippage Realized</span>
            <span className="text-emerald-400 font-semibold">0.00% (Zero Loss)</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Transaction Signature</span>
            <span className="text-blue-400 flex items-center gap-1 cursor-pointer hover:underline">
              7v9x...4mK1 <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            onClick={handleShareX}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c7f284] hover:bg-[#b5e370] text-[#0c0e14] font-bold text-xs shadow-lg shadow-[#c7f284]/15 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share Victory on X
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-[#1f2838] hover:bg-[#28354a] text-white font-semibold text-xs border border-[#2e3b52] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
