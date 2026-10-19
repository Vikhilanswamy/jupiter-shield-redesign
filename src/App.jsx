import React, { useState } from "react";
import { Header } from "./components/Header";
import { SwapCard } from "./components/SwapCard";
import { LegacySwapCard } from "./components/LegacySwapCard";
import { TokenModal } from "./components/TokenModal";
import { ReceiptModal } from "./components/ReceiptModal";
import { WalletModal } from "./components/WalletModal";
import { CaseStudyDrawer } from "./components/CaseStudyDrawer";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { Shield, Sparkles, Smartphone, Monitor, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { POPULAR_TOKENS } from "./data/tokens";

export function App() {
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [isLegacyMode, setIsLegacyMode] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  // Active Tokens State
  const [fromToken, setFromToken] = useState(POPULAR_TOKENS[0]); // SOL
  const [toToken, setToToken] = useState(POPULAR_TOKENS[1]); // USDC

  // Modals
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [tokenModalTarget, setTokenModalTarget] = useState("from");
  const [activeTokenInModal, setActiveTokenInModal] = useState(POPULAR_TOKENS[0]);
  const [receiptTxData, setReceiptTxData] = useState(null);

  const openTokenModal = (target, currentToken) => {
    setTokenModalTarget(target);
    setActiveTokenInModal(currentToken);
    setIsTokenModalOpen(true);
  };

  const handleSelectToken = (selectedToken) => {
    if (tokenModalTarget === "from") {
      if (selectedToken.symbol === toToken.symbol) {
        setToToken(fromToken);
      }
      setFromToken(selectedToken);
    } else {
      if (selectedToken.symbol === fromToken.symbol) {
        setFromToken(toToken);
      }
      setToToken(selectedToken);
    }
    setIsTokenModalOpen(false);
  };

  const handleSwapSuccess = (txData) => {
    setReceiptTxData(txData);
  };

  return (
    <div className="min-h-screen bg-[#090d14] text-gray-100 flex flex-col selection:bg-emerald-400 selection:text-slate-950">
      {/* Top Professional Notice Banner */}
      <div className="bg-[#0f1521] border-b border-[#1b2434] py-2 px-4 text-center text-xs flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="text-gray-300">
          Superteam India Design Submission • <strong className="text-white">Jupiter Shield UX Architecture</strong>
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="font-medium text-sky-400 hover:text-sky-300 hover:underline inline-flex items-center gap-1"
          >
            <span>Before vs After Diff</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <span className="text-gray-600">•</span>
          <button
            onClick={() => setIsCaseStudyOpen(true)}
            className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline inline-flex items-center gap-1"
          >
            <span>Read Heuristic Teardown</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <Header
        isMobileFrame={isMobileFrame}
        setIsMobileFrame={setIsMobileFrame}
        isLegacyMode={isLegacyMode}
        setIsLegacyMode={setIsLegacyMode}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenWallet={() => setIsWalletOpen(true)}
      />

      {/* Main Content Arena */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        {isMobileFrame ? (
          /* Mobile Phone Frame Wrapper */
          <div className="relative mx-auto my-4 w-[375px] sm:w-[385px] h-[780px] bg-[#0c1017] rounded-[48px] p-3 shadow-2xl border-4 border-[#252f42] ring-1 ring-white/10 flex flex-col overflow-hidden">
            {/* Phone Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c2436] mr-3" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c2436]" />
            </div>

            {/* Mobile Viewport Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar rounded-[36px] bg-[#090d14] p-2 space-y-2">
              {isLegacyMode ? (
                <LegacySwapCard onSwitchToShield={() => setIsLegacyMode(false)} />
              ) : (
                <SwapCard
                  fromToken={fromToken}
                  setFromToken={setFromToken}
                  toToken={toToken}
                  setToToken={setToToken}
                  onSwapSuccess={handleSwapSuccess}
                  openTokenModal={openTokenModal}
                />
              )}
            </div>

            {/* Phone Home Bar */}
            <div className="w-32 h-1 bg-gray-500 rounded-full mx-auto my-1.5 shrink-0 opacity-40" />
          </div>
        ) : (
          /* Desktop Responsive View */
          <div className="w-full max-w-xl mx-auto space-y-5">
            {isLegacyMode ? (
              <LegacySwapCard onSwitchToShield={() => setIsLegacyMode(false)} />
            ) : (
              <>
                <SwapCard
                  fromToken={fromToken}
                  setFromToken={setFromToken}
                  toToken={toToken}
                  setToToken={setToToken}
                  onSwapSuccess={handleSwapSuccess}
                  openTokenModal={openTokenModal}
                />

                {/* Proof of Architecture Metrics */}
                <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
                  <div className="p-3 rounded-xl bg-[#111622] border border-[#1d2637]">
                    <div className="font-semibold text-white text-xs font-mono">0.3 - 0.6%</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Dynamic Adaptive Gas</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#111622] border border-[#1d2637]">
                    <div className="font-semibold text-emerald-400 text-xs">Jito Relayer</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Zero Sandwich Loss</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#111622] border border-[#1d2637]">
                    <div className="font-semibold text-white text-xs font-mono">&lt; 380ms</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">Block Inclusion Latency</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#182130] bg-[#0c1017] py-5 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Built by <strong>Vikhilan Swamy</strong> for the Superteam India Bounty</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setIsLegacyMode(!isLegacyMode)}
              className="hover:text-white transition-colors"
            >
              {isLegacyMode ? "Switch to Shield" : "Inspect Legacy Layout"}
            </button>
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Before vs After
            </button>
            <button
              onClick={() => setIsCaseStudyOpen(true)}
              className="text-emerald-400 hover:underline font-semibold"
            >
              Case Study
            </button>
            <a
              href="https://github.com/Vikhilanswamy/jupiter-shield-redesign"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <TokenModal
        isOpen={isTokenModalOpen}
        onClose={() => setIsTokenModalOpen(false)}
        onSelect={handleSelectToken}
        currentToken={activeTokenInModal}
      />

      <ReceiptModal
        isOpen={Boolean(receiptTxData)}
        onClose={() => setReceiptTxData(null)}
        txData={receiptTxData}
      />

      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />

      <CaseStudyDrawer
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      <BeforeAfterGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}

export default App;
