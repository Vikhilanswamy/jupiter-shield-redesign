import React, { useState } from "react";
import { X, Search, Check, ShieldCheck, Flame } from "lucide-react";
import { POPULAR_TOKENS } from "../data/tokens";

export function TokenModal({ isOpen, onClose, onSelect, currentToken }) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = POPULAR_TOKENS.filter(
    (t) =>
      t.symbol.toLowerCase().includes(search.toLowerCase()) ||
      t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#121622] border border-[#273247] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#20293b]">
          <h3 className="font-bold text-white text-base">Select Token</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a2130] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-[#20293b]">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by token name or symbol..."
              className="w-full bg-[#171d2b] border border-[#273247] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c7f284] transition-all"
              autoFocus
            />
          </div>

          {/* Quick Filter Chips */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 text-xs">
            {POPULAR_TOKENS.slice(0, 4).map((token) => (
              <button
                key={token.symbol}
                onClick={() => {
                  onSelect(token);
                  onClose();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1a2130] hover:bg-[#232c3f] border border-[#27334a] text-gray-200 transition-colors shrink-0"
              >
                <img src={token.icon} alt={token.symbol} className="w-3.5 h-3.5 rounded-full" />
                <span className="font-semibold text-[11px]">{token.symbol}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Token List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {filtered.map((token) => {
            const isSelected = currentToken.symbol === token.symbol;
            return (
              <button
                key={token.symbol}
                onClick={() => {
                  onSelect(token);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  isSelected
                    ? "bg-[#1d2738] border border-[#c7f284]/40"
                    : "hover:bg-[#18202d] border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={token.icon} alt={token.symbol} className="w-9 h-9 rounded-full" />
                    {token.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-[#c7f284] absolute -bottom-0.5 -right-0.5 bg-[#121622] rounded-full" />
                    )}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                      <span>{token.symbol}</span>
                      <span className="text-[10px] text-gray-500 font-normal px-1 py-0.2 bg-[#1b2333] rounded">
                        {token.tag}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">{token.name}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-white">
                    {token.balance.toLocaleString()} {token.symbol}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    ${(token.balance * token.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
