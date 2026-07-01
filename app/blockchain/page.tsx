import { Blocks } from 'lucide-react'
import { ServicePageLayout } from '@/components/ServicePageLayout'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Blockchain Development Services',
  description:
    'Enterprise blockchain development — smart contracts, DApps, Web3 wallets, NFT platforms, DeFi solutions, and private blockchain networks built by Solvebytez.',
  path: '/blockchain',
  keywords: [
    'blockchain development',
    'smart contract development',
    'Web3 development',
    'DApp development',
    'NFT marketplace',
    'DeFi solutions',
    'Ethereum Solidity',
    'private blockchain',
  ],
})

export default function BlockchainPage() {
  return (
    <ServicePageLayout
      path="/blockchain"
      badge="Blockchain Solutions"
      title="Secure Blockchain & Web3 Development"
      subtitle="Transparent. Decentralized. Built for trust."
      description="We design and build blockchain solutions for businesses — from smart contracts and DApps to NFT marketplaces, token economies, DeFi platforms, and private enterprise blockchains on Ethereum, Polygon, BNB Chain, and Hyperledger."
      icon={Blocks}
      workflow={{
        title: 'Blockchain Development Workflow',
        subtitle: 'From architecture to mainnet — with security audits, testing, and scalable deployment.',
        steps: [
          { title: 'Use-case & Architecture', description: 'Define business goals, choose public vs private chain, consensus model, and tokenomics.' },
          { title: 'Smart Contract Design', description: 'Spec contracts, access controls, upgrade patterns, and integration touchpoints.' },
          { title: 'Development & Testing', description: 'Build contracts and DApp frontends on testnets with unit and integration tests.' },
          { title: 'Security Audit Prep', description: 'Static analysis, vulnerability checks, gas optimization, and audit-ready documentation.' },
          { title: 'Deployment & Integration', description: 'Mainnet launch, wallet connect, APIs, admin dashboards, and backend sync.' },
          { title: 'Monitor & Maintain', description: 'On-chain monitoring, upgrades, governance, and ongoing support.' },
        ],
      }}
      advantages={[
        { title: 'Immutable Trust', description: 'Tamper-proof records increase transparency for partners and customers.' },
        { title: 'Automated Execution', description: 'Smart contracts remove intermediaries and speed up settlements.' },
        { title: 'Global Reach', description: 'Web3 apps operate 24/7 without geographic payment barriers.' },
        { title: 'New Revenue Models', description: 'Tokens, NFTs, and DeFi unlock innovative monetization strategies.' },
      ]}
      disadvantages={[
        { title: 'Regulatory Uncertainty', description: 'Crypto and token rules vary by region and evolve quickly.' },
        { title: 'Security Risk', description: 'Smart contract bugs can be costly — audits and testing are essential.' },
        { title: 'User Onboarding', description: 'Wallets and gas fees can add friction for non-crypto users.' },
        { title: 'Network Costs', description: 'Public chain gas fees fluctuate and affect transaction economics.' },
      ]}
      features={[
        'Smart Contract Development (Solidity, Rust)',
        'DApp & Web3 Frontend Development',
        'NFT Marketplace & Minting Platforms',
        'DeFi — Staking, Lending & Yield Protocols',
        'Token Creation (ERC-20, ERC-721, ERC-1155)',
        'Crypto Wallet Integration (MetaMask, WalletConnect)',
        'Private & Permissioned Blockchain (Hyperledger)',
        'Blockchain API & Indexer Integration',
        'IPFS & Decentralized Storage',
        'Cross-chain Bridges & Multi-chain Deployment',
        'DAO Governance & Voting Systems',
        'Blockchain Consulting & Audits Support',
      ]}
      benefits={[
        { title: 'Enterprise-Grade Security', description: 'Best-practice contract patterns, access controls, and audit-ready code.' },
        { title: 'Faster Time-to-Market', description: 'Proven frameworks and reusable modules accelerate Web3 launches.' },
        { title: 'Multi-Chain Ready', description: 'Deploy on Ethereum, Polygon, BNB Chain, or private networks as needed.' },
        { title: 'Full-Stack Web3', description: 'Smart contracts, frontend, backend, and wallet UX in one team.' },
        { title: 'Scalable Architecture', description: 'Layer-2, indexing, and caching strategies for high-traffic DApps.' },
        { title: 'Ongoing Support', description: 'Monitoring, upgrades, and governance support after mainnet launch.' },
      ]}
    />
  )
}
