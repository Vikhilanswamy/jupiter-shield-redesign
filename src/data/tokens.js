export const POPULAR_TOKENS = [
  {
    symbol: "SOL",
    name: "Solana",
    mint: "So11111111111111111111111111111111111111112",
    decimals: 9,
    price: 184.25,
    change24h: 4.82,
    balance: 14.85,
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    verified: true,
    tag: "Native"
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    price: 1.00,
    change24h: 0.01,
    balance: 1420.50,
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    verified: true,
    tag: "Stable"
  },
  {
    symbol: "JUP",
    name: "Jupiter",
    mint: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
    decimals: 6,
    price: 1.18,
    change24h: 8.45,
    balance: 850.00,
    icon: "https://static.jup.ag/jup/icon.png",
    verified: true,
    tag: "DeFi"
  },
  {
    symbol: "BONK",
    name: "Bonk",
    mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    decimals: 5,
    price: 0.0000224,
    change24h: -1.82,
    balance: 15400000,
    icon: "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwfcf414",
    verified: true,
    tag: "Meme"
  },
  {
    symbol: "WIF",
    name: "dogwifhat",
    mint: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    decimals: 6,
    price: 2.65,
    change24h: 12.10,
    balance: 120.00,
    icon: "https://bafkreibk3covs5ltyqxa272uodhculbx6keqdjdew52wobm44xtagq4uxe.ipfs.nftstorage.link",
    verified: true,
    tag: "Meme"
  },
  {
    symbol: "RENDER",
    name: "Render Token",
    mint: "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof",
    decimals: 8,
    price: 6.42,
    change24h: 3.15,
    balance: 45.20,
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof/logo.png",
    verified: true,
    tag: "AI & DePIN"
  }
];

export const SHIELD_PRESETS = [
  {
    id: "eco",
    name: "Eco Shield",
    badge: "Lowest Gas",
    slippage: "0.1%",
    priorityFee: "0.00005 SOL",
    mevProtected: false,
    speed: "~1.2s",
    successRate: "97.5%",
    description: "Standard validator priority fee. Best for stable pairs and calm market conditions."
  },
  {
    id: "turbo",
    name: "Dynamic Turbo",
    badge: "Recommended",
    slippage: "Adaptive (0.3% - 0.6%)",
    priorityFee: "0.0005 SOL",
    mevProtected: true,
    speed: "< 500ms",
    successRate: "99.8%",
    description: "Real-time fee dynamic scaling. Instantly hops the queue ahead of sudden volatility spikes."
  },
  {
    id: "mev",
    name: "Jito Anti-Sandwich",
    badge: "Zero MEV Risk",
    slippage: "Guaranteed 0.2%",
    priorityFee: "0.0015 SOL Tip",
    mevProtected: true,
    speed: "< 350ms",
    successRate: "100%",
    description: "Routes via private Jito block engine bundle. Completely hides your swap from toxic sandwich bots."
  }
];
