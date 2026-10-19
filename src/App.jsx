import React, { useState } from "react";
import { Header } from "./components/Header";
import { SwapCard } from "./components/SwapCard";
import { TokenModal } from "./components/TokenModal";
import { ReceiptModal } from "./components/ReceiptModal";
import { CaseStudyDrawer } from "./components/CaseStudyDrawer";
import { LegacyComparisonModal } from "./components/LegacyComparisonModal";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { Shield, Sparkles, Smartphone, Monitor, BookOpen, ExternalLink, Heart, Zap, Layers } from "lucide-react";
import { POPULAR_TOKENS } from "./data/tokens";

export function App() {
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [isLegacyMode, setIsLegacyMode] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

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
    <div className="min-h-screen bg-[#0a0d14] text-gray-100 flex flex-col selection:bg-[#c7f284] selection:text-[#0c0e14]">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#17202e] via-[#1a2538] to-[#17202e] border-b border-[#232f44] py-2 px-4 text-center text-xs flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="text-gray-300">
          Built for <strong className="text-[#c7f284]">Superteam India Design Bounty</strong> • 
          Making Solana DeFi Delightful, Fast & MEV-Proof 🛡️
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="font-bold text-sky-400 hover:text-sky-300 hover:underline inline-flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            Visual Before vs After →
          </button>
          <button
            onClick={() => setIsCaseStudyOpen(true)}
            className="font-bold text-[#c7f284] hover:underline inline-flex items-center gap-1"
          >
            Read Design Teardown →
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
      />

      {/* Main Content Arena */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#16a34a]/15 via-[#c7f284]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

        {isMobileFrame ? (
          /* Mobile Phone Frame Wrapper */
          <div className="relative mx-auto my-4 w-[385px] h-[780px] bg-[#0c0f17] rounded-[50px] p-3 shadow-2xl border-4 border-[#2b3548] ring-1 ring-white/10 flex flex-col overflow-hidden">
            {/* Phone Notch / Dynamic Island */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c2436] mr-3" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c2436]" />
            </div>

            {/* Mobile Viewport Content */}
            <div className="flex-1 overflow-y-auto rounded-[36px] bg-[#0c0e14] p-3 space-y-3">
              <SwapCard
                fromToken={fromToken}
                setFromToken={setFromToken}
                toToken={toToken}
                setToToken={setToToken}
                onSwapSuccess={handleSwapSuccess}
                isLegacyMode={isLegacyMode}
                openTokenModal={openTokenModal}
              />
            </div>

            {/* Phone Home Bar */}
            <div className="w-32 h-1 bg-gray-500 rounded-full mx-auto my-1.5 shrink-0 opacity-40" />
          </div>
        ) : (
          /* Desktop Responsive View */
          <div className="w-full max-w-xl mx-auto space-y-6">
            <SwapCard
              fromToken={fromToken}
              setFromToken={setFromToken}
              toToken={toToken}
              setToToken={setToToken}
              onSwapSuccess={handleSwapSuccess}
              isLegacyMode={isLegacyMode}
              openTokenModal={openTokenModal}
            />

            {/* Quick Proof-of-Work Badges */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-400">
              <div className="p-3 rounded-2xl bg-[#111622] border border-[#20293b]">
                <div className="font-bold text-white text-sm">Adaptive Gas</div>
                <div className="text-[11px] text-gray-400 mt-0.5">0.3 - 0.6% Dynamic</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#111622] border border-[#20293b]">
                <div className="font-bold text-[#c7f284] text-sm">Jito Bundle</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Zero Sandwich Loss</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#111622] border border-[#20293b]">
                <div className="font-bold text-white text-sm">&lt; 400ms</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Execution Latency</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a2233] bg-[#0c0e14] py-6 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>for the <strong>Superteam India Design Bounty</strong></span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="text-sky-400 hover:text-sky-300 font-semibold"
            >
              Before vs After
            </button>
            <button
              onClick={() => setIsLegacyMode(true)}
              className="hover:text-white transition-colors"
            >
              Legacy Teardown
            </button>
            <button
              onClick={() => setIsCaseStudyOpen(true)}
              className="text-[#c7f284] hover:underline font-bold"
            >
              Full Case Study
            </button>
            <a
              href="https://github.com/Vikhilanswamy"
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

      <CaseStudyDrawer
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      <LegacyComparisonModal
        isOpen={isLegacyMode}
        onClose={() => setIsLegacyMode(false)}
      />

      <BeforeAfterGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}

export default App;
