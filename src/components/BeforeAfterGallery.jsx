import React, { useState } from "react";
import { ArrowLeftRight, CheckCircle2, XCircle, Sparkles, Layers, Sliders, GitCommit, Award } from "lucide-react";

export function BeforeAfterGallery({ isOpen, onClose }) {
  const [selectedFeature, setSelectedFeature] = useState(0);

  if (!isOpen) return null;

  const features = [
    {
      title: "1. Core Swap Layout & Visual Ergonomics",
      category: "Swap Interface",
      icon: Layers,
      before: {
        heading: "Legacy Jupiter Swap",
        flaws: [
          "Sprawling height forces swap button below 600px mobile fold",
          "Tiny token balances requiring mental math to estimate USD value",
          "Disconnected settings icons with no status indicators",
          "High cognitive load from multiple dense numerical inputs"
        ],
        previewBadges: ["Dense Layout", "Mobile Scroll Required", "Hidden Fees"]
      },
      after: {
        heading: "Jupiter Shield Redesign",
        improvements: [
          "Compact 420px vertical profile fitting naturally above mobile thumb fold",
          "Large, high-contrast typography with instant real-time USD conversion",
          "Live Auto-Shield protection badge directly visible above swap inputs",
          "Quick percentage chips (25%, 50%, 75%, MAX) with 1-tap calculation"
        ],
        previewBadges: ["Ergonomic Thumb Zone", "Real-Time Math", "Fitts's Law Compliant"]
      }
    },
    {
      title: "2. Slippage & Execution Settings (Auto-Shield)",
      category: "Slippage & Gas",
      icon: Sliders,
      before: {
        heading: "Legacy Manual Bps Slider",
        flaws: [
          "Users forced to guess Basis Points (0.1% to 1.5%) with zero volatility context",
          "High failure rate: 'Transaction Failed: Slippage Exceeded' during pump events",
          "Separate, disjointed sub-modal for Priority Gas Lamports",
          "No built-in MEV protection against toxic sandwich searchers"
        ],
        previewBadges: ["Manual Guesswork", "Slippage Exceeded Errors", "MEV Vulnerable"]
      },
      after: {
        heading: "Intelligent Auto-Shield Presets",
        improvements: [
          "3 unified human-readable cards: Eco, Dynamic Turbo, and Jito Anti-Sandwich",
          "Dynamic slippage automatically adapts to Solana block space volatility",
          "Integrated private Jito block engine routing eliminates sandwich attacks 100%",
          "Clear visual success probability guarantees (up to 100% execution rate)"
        ],
        previewBadges: ["1-Tap Protection", "Zero-Sandwich Guarantee", "Dynamic Adaptive Fees"]
      }
    },
    {
      title: "3. Multi-Hop Split Routing Visualizer",
      category: "Smart Routing",
      icon: GitCommit,
      before: {
        heading: "Legacy Multi-Pool Graph",
        flaws: [
          "Spaghetti diagram of 4+ pools (Raydium, Orca, Meteora, Phoenix) crowds screen",
          "Microscopic font sizes and cryptic contract mint addresses",
          "Doesn't communicate the actual economic benefit of splitting the trade",
          "Overwhelms non-technical users with unnecessary internal liquidity details"
        ],
        previewBadges: ["Visual Clutter", "Micro Text", "No Clear Benefit"]
      },
      after: {
        heading: "Split-Node Value Pipeline",
        improvements: [
          "Clean 3-node visual pipeline connecting input token, DEX split, and output",
          "Prominent value banner: '+$4.18 Extra Delivered vs Single Pool'",
          "Clear fee breakdown per pool (0.01% - 0.04%) with < 0.01% price impact indicator",
          "Collapsible into a high-density summary card on smaller mobile screens"
        ],
        previewBadges: ["Prominent Dollar Savings", "Clean 3-Node Map", "Deep Liquidity Proof"]
      }
    },
    {
      title: "4. Post-Swap Victory & Viral Growth",
      category: "Post-Swap UX",
      icon: Award,
      before: {
        heading: "Legacy Toast Notification",
        flaws: [
          "Disappears after 3 seconds, leaving users unsure if execution was optimal",
          "Only links to an external Solscan explorer with raw hexadecimal logs",
          "Zero celebration of savings or price improvement achieved",
          "Zero viral incentive for users to share their trade with friends"
        ],
        previewBadges: ["Fleeting Toast", "Cryptic Hash Link", "Zero Dopamine"]
      },
      after: {
        heading: "Interactive Victory Receipt",
        improvements: [
          "Glassmorphic celebration modal with celebratory confetti feedback",
          "Shows exact realized savings, 0.00% slippage loss, and 380ms execution speed",
          "1-Click 'Share on X' generating high-converting graphic for organic reach",
          "Direct verifiable transaction signature link for on-chain auditability"
        ],
        previewBadges: ["Confetti Celebration", "Tangible Savings Proof", "1-Click Social Sharing"]
      }
    }
  ];

  const current = features[selectedFeature];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#10141f] border border-[#242f44] w-full max-w-4xl rounded-3xl shadow-2xl p-6 relative flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1f293d]">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#c7f284]/15 text-[#c7f284] border border-[#c7f284]/30 text-xs font-bold uppercase tracking-wider">
                Figma Feature Comparison
              </span>
              <span className="text-xs text-gray-400">Superteam India Design Criteria</span>
            </div>
            <h2 className="text-xl font-extrabold text-white mt-1">Before vs. After Screen Breakdown</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white bg-[#1a2333] hover:bg-[#253249] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Feature Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 pb-2">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            const isSelected = selectedFeature === i;
            return (
              <button
                key={i}
                onClick={() => setSelectedFeature(i)}
                className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-[#182233] border-[#c7f284] text-white shadow-md shadow-[#c7f284]/10"
                    : "bg-[#131824] border-[#20293b] text-gray-400 hover:text-gray-200 hover:border-[#2d3a52]"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#c7f284]" : "text-gray-400"}`} />
                <div className="truncate">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">{feat.category}</div>
                  <div className="text-xs font-bold truncate text-white">{feat.title.split(". ")[1]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Comparison Showcase Arena */}
        <div className="my-4 overflow-y-auto flex-1 pr-1 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Before Column (Red/Legacy) */}
            <div className="p-5 rounded-3xl bg-[#141017] border border-red-500/30 flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                    <XCircle className="w-4 h-4 text-red-400" />
                    BEFORE: Legacy Jupiter
                  </span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                    Current Experience
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-white">{current.before.heading}</h3>
                
                <div className="mt-4 space-y-2.5">
                  {current.before.flaws.map((flaw, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{flaw}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-red-500/20">
                {current.before.previewBadges.map((badge, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/10 text-red-300 font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* After Column (Green/Shield) */}
            <div className="p-5 rounded-3xl bg-[#0f171c] border border-[#c7f284]/50 flex flex-col justify-between space-y-4 relative overflow-hidden shadow-xl shadow-[#c7f284]/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c7f284]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#c7f284]">
                    <CheckCircle2 className="w-4 h-4 text-[#c7f284]" />
                    AFTER: Jupiter Shield Redesign
                  </span>
                  <span className="text-[10px] font-mono text-[#c7f284] bg-[#c7f284]/15 px-2 py-0.5 rounded-full border border-[#c7f284]/30 font-bold">
                    Superteam Solution
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-white">{current.after.heading}</h3>
                
                <div className="mt-4 space-y-2.5">
                  {current.after.improvements.map((imp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <span className="text-[#c7f284] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#c7f284]/20">
                {current.after.previewBadges.map((badge, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#c7f284]/15 text-[#c7f284] font-semibold">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#1f293d] flex items-center justify-between text-xs">
          <span className="text-gray-400">Step {selectedFeature + 1} of {features.length}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedFeature((prev) => (prev > 0 ? prev - 1 : features.length - 1))}
              className="px-3 py-1.5 rounded-xl bg-[#1a2333] hover:bg-[#253249] text-white transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setSelectedFeature((prev) => (prev < features.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-xl bg-[#c7f284] text-[#0c0e14] font-bold hover:bg-[#b5e370] transition-colors"
            >
              Next Feature →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
