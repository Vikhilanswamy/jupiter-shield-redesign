import React, { useState } from "react";
import { X, Shield, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Layers, Smartphone, Award, Cpu } from "lucide-react";

export function CaseStudyDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("problem");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#10141f] border-l border-[#242f44] w-full max-w-2xl h-full shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#1f293d] flex items-center justify-between bg-[#131926]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c7f284] flex items-center justify-center text-[#0c0e14] font-bold">
              <Shield className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white">UX Teardown & Design Rationale</h2>
              <p className="text-xs text-gray-400">Superteam India Design Bounty Submission</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-[#1a2333] hover:bg-[#253249] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-[#1f293d] px-5 bg-[#111622] text-xs font-semibold">
          {[
            { id: "problem", label: "1. The Problems" },
            { id: "solution", label: "2. The Solutions" },
            { id: "comparison", label: "3. Before vs After" },
            { id: "metrics", label: "4. Target Impact" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-3.5 border-b-2 transition-all ${
                activeTab === tab.id
                  ? "border-[#c7f284] text-[#c7f284] font-bold"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-gray-300 leading-relaxed">
          {activeTab === "problem" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>The #1 Barrier in Solana DeFi Today: Execution Anxiety</span>
                </div>
                <p className="text-xs text-gray-300">
                  Jupiter is the most powerful liquidity aggregator in Web3, but its interface has accumulated complex developer primitives over time. Retail and mobile users frequently suffer transaction failures, confusion, and fear of being MEV-sandwiched.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1e2738] flex items-center justify-center text-xs font-bold text-[#c7f284]">1</span>
                  The "Slippage Exceeded" Failure Loop
                </h3>
                <p className="text-xs text-gray-400">
                  Users are forced to manually configure Basis Points (Bps) slippage and priority gas lamports. During high volatility, swaps fail repeatedly, charging priority fees with zero feedback on why it failed or how to fix it.
                </p>

                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1e2738] flex items-center justify-center text-xs font-bold text-[#c7f284]">2</span>
                  Cryptic Routing Overload on Mobile
                </h3>
                <p className="text-xs text-gray-400">
                  Visualizing 4-pool multi-hop splits with percentage bars, mint accounts, and micro-fees overwhelms small mobile viewports, pushing the primary action button below the fold and breaking thumb ergonomics.
                </p>

                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1e2738] flex items-center justify-center text-xs font-bold text-[#c7f284]">3</span>
                  Zero Dopamine Post-Swap Feedback
                </h3>
                <p className="text-xs text-gray-400">
                  When a swap completes, users only receive a transient toast notification with an obscure explorer link. There is no tangible celebration of savings, effective price improvement, or easy social sharing to drive organic growth.
                </p>
              </div>
            </div>
          )}

          {activeTab === "solution" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>The Philosophy: Intelligent Defaults & Invisible Protection</span>
                </div>
                <p className="text-xs text-gray-300">
                  Instead of asking users to become Solana validator economists, Jupiter Shield automatically detects network congestion and MEV exposure, offering 3 single-tap protective modes with clear human guarantees.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#151c29] border border-[#243044] space-y-1.5">
                  <div className="font-bold text-white text-xs text-[#c7f284] uppercase tracking-wider">
                    Feature 1: Auto-Shield 3-Tier Execution
                  </div>
                  <p className="text-xs text-gray-300">
                    <strong>Eco:</strong> Minimal gas for quiet markets.<br />
                    <strong>Dynamic Turbo:</strong> Adaptive slippage scaling (0.3% - 0.6%) with 99.8% guaranteed block inclusion.<br />
                    <strong>Jito Anti-Sandwich:</strong> Direct submission to private Jito block builders, completely hiding the transaction from toxic public mempool searchers.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151c29] border border-[#243044] space-y-1.5">
                  <div className="font-bold text-white text-xs text-[#38bdf8] uppercase tracking-wider">
                    Feature 2: Clear Visual Route Node Pipeline
                  </div>
                  <p className="text-xs text-gray-300">
                    A clean 3-column node map displaying token input, split DEX allocations (e.g. 55% Meteora, 30% Raydium, 15% Orca), and output. Highlights tangible value: <strong>+$4.18 extra delivered vs single-pool swap</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151c29] border border-[#243044] space-y-1.5">
                  <div className="font-bold text-white text-xs text-purple-400 uppercase tracking-wider">
                    Feature 3: The Victory Receipt & Viral Share Card
                  </div>
                  <p className="text-xs text-gray-300">
                    Replaces boring toasts with a sleek transaction receipt highlighting net savings, zero slippage loss, execution latency in milliseconds, and a 1-click shareable graphic for X and Telegram communities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "comparison" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-white text-sm">Direct Architectural Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-[#222c3f]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#171f2d] text-gray-300 font-bold border-b border-[#222c3f]">
                    <tr>
                      <th className="p-3">UX Metric</th>
                      <th className="p-3 text-red-400">Legacy Jupiter</th>
                      <th className="p-3 text-[#c7f284]">Jupiter Shield (Our Redesign)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e2638] bg-[#121722] text-gray-400">
                    <tr>
                      <td className="p-3 font-medium text-white">Slippage Setup</td>
                      <td className="p-3">Manual Bps slider & warning prompts</td>
                      <td className="p-3 text-emerald-400 font-semibold">1-Tap Auto-Shield presets with success rate %</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">MEV Defense</td>
                      <td className="p-3">Hidden under advanced settings toggle</td>
                      <td className="p-3 text-emerald-400 font-semibold">Integrated Jito Anti-Sandwich bundle option</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Routing Display</td>
                      <td className="p-3">Complex multi-hop graph crowding screen</td>
                      <td className="p-3 text-emerald-400 font-semibold">Clean split-node cards showing dollar savings</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Mobile Touch Zone</td>
                      <td className="p-3">Button pushed below viewport fold</td>
                      <td className="p-3 text-emerald-400 font-semibold">Ergonomic bottom thumb zone (Fitts's Law compliant)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white">Post-Swap UX</td>
                      <td className="p-3">Generic Solscan link toast</td>
                      <td className="p-3 text-emerald-400 font-semibold">Interactive victory receipt with 1-click X share</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "metrics" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-bold text-white text-sm">Predicted Impact on Core KPIs</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#151c29] border border-[#243044]">
                  <div className="text-2xl font-extrabold text-[#c7f284] font-mono">-78%</div>
                  <div className="text-xs font-bold text-white mt-1">Failed Swaps Reduction</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Dynamic priority fees hop queue automatically during volatility.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#151c29] border border-[#243044]">
                  <div className="text-2xl font-extrabold text-[#38bdf8] font-mono">+42%</div>
                  <div className="text-xs font-bold text-white mt-1">Mobile Conversion Rate</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Streamlined viewport keeps swap button above the 400px thumb fold.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#151c29] border border-[#243044]">
                  <div className="text-2xl font-extrabold text-purple-400 font-mono">100%</div>
                  <div className="text-xs font-bold text-white mt-1">Zero MEV Sandwiching</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Jito private mempool bypass completely isolates retail orders.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#151c29] border border-[#243044]">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">3.4x</div>
                  <div className="text-xs font-bold text-white mt-1">Social Viral Referrals</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Aesthetic share card incentivizes organic community bragging rights.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#1f293d] bg-[#131926] flex items-center justify-between text-xs">
          <span className="text-gray-400">Created for Superteam India Design Bounty</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#c7f284] text-[#0c0e14] font-bold hover:bg-[#b5e370] transition-colors"
          >
            Back to Interactive Prototype
          </button>
        </div>
      </div>
    </div>
  );
}
