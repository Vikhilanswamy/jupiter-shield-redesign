import React, { useState } from "react";
import { X, Copy, Check, ExternalLink, Wallet, LogOut, ArrowUpRight, ShieldCheck } from "lucide-react";
import { POPULAR_TOKENS } from "../data/tokens";

export function WalletModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const fullAddress = "7x2vL9sQpM3wK8bRt4nF1yZ6eDc9aX0uV8mP5h2g4d9f";
  const truncatedAddress = "7x2v...4d9f";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#111622] border border-[#232c3d] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1f2838]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-semibold text-white text-sm">Connected Wallet</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a2333] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Address Card */}
          <div className="p-3.5 rounded-xl bg-[#161d2b] border border-[#232d40] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-xs text-emerald-400 font-bold">
                ◎
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-white">{truncatedAddress}</div>
                <div className="text-[10px] text-gray-400">Solana Mainnet-Beta</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-[#1f283a] hover:bg-[#28344c] text-gray-300 hover:text-white transition-colors"
                title="Copy Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <a
                href={`https://solscan.io/account/${fullAddress}`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-[#1f283a] hover:bg-[#28344c] text-gray-300 hover:text-white transition-colors"
                title="View on Solscan"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Asset Breakdown */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400 px-1">
              <span>Token Holdings</span>
              <span>USD Value</span>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {POPULAR_TOKENS.slice(0, 4).map((token) => (
                <div
                  key={token.symbol}
                  className="p-2.5 rounded-xl bg-[#151b27] border border-[#20293b] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={token.icon} alt="" className="w-6 h-6 rounded-full" />
                    <div>
                      <div className="font-semibold text-white">{token.symbol}</div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {token.balance.toLocaleString()} {token.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="font-mono font-medium text-gray-200">
                    ${(token.balance * token.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Health */}
          <div className="px-3 py-2 rounded-xl bg-[#0f141f] border border-[#1b2230] flex items-center justify-between text-[11px] text-gray-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RPC Latency: <strong className="text-gray-200 font-mono">14ms</strong></span>
            </div>
            <span className="text-emerald-400 font-mono font-medium">Synced (Epoch 692)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0d121c] border-t border-[#1f2838] flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Disconnect</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1c2435] hover:bg-[#253047] text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
