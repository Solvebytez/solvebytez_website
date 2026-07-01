'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Play,
  Bot,
  Zap,
  TrendingUp,
  ChevronDown,
  Sparkles,
} from 'lucide-react'
import { GlowButton } from '@/components/ui/primitives'
import { Marquee } from '@/components/ui/primitives'
import { homepagePortfolioProjects } from '@/lib/portfolio-projects'

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow orbs */}
      <div className="absolute -left-10 top-10 size-40 rounded-full bg-[#2563EB]/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -right-5 bottom-10 size-32 rounded-full bg-[#7C3AED]/30 blur-3xl animate-pulse-glow" />

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative rounded-3xl border border-white/10 bg-[#0B1120]/90 p-1 shadow-2xl glow-blue backdrop-blur-xl"
      >
        <div className="rounded-[22px] bg-[#0F172A] p-6">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-white/40">AI Command Center</span>
          </div>

          {/* Stats row */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            {[
              { label: 'Automations', value: '247', change: '+12%', color: '#2563EB' },
              { label: 'Tasks Saved', value: '18.4K', change: '+34%', color: '#7C3AED' },
              { label: 'ROI', value: '340%', change: '+8%', color: '#06B6D4' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 p-3">
                <p className="text-[10px] text-white/40">{stat.label}</p>
                <p className="font-heading text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px]" style={{ color: stat.color }}>{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="mb-4 rounded-xl border border-white/5 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-white/60">Workflow Performance</span>
              <span className="text-xs text-[#06B6D4]">Live</span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[#2563EB] to-[#06B6D4] opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Workflow nodes */}
          <div className="flex items-center gap-2">
            {['Trigger', 'AI Process', 'Action', 'Notify'].map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-center">
                  <p className="text-[9px] text-white/40">{node}</p>
                </div>
                {i < 3 && <div className="h-px w-4 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-8 top-16 hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#2563EB]/20">
            <Bot className="size-5 text-[#2563EB]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">AI Agent Active</p>
            <p className="text-[10px] text-white/50">Processing 24 leads</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-6 bottom-20 hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#06B6D4]/20">
            <TrendingUp className="size-5 text-[#06B6D4]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">+340% ROI</p>
            <p className="text-[10px] text-white/50">This quarter</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 bottom-8 hidden rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-2">
          <Zap className="size-4 text-[#7C3AED]" />
          <p className="text-xs font-semibold text-white">Auto-scaling</p>
        </div>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      heroRef.current.style.setProperty('--mouse-x', `${x}%`)
      heroRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#0B1120] pt-24"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.08), transparent 40%), #0B1120`,
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern-dark opacity-50" />
      <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-[#2563EB]/10 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 size-80 rounded-full bg-[#7C3AED]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="size-4 text-[#06B6D4]" />
              <span className="text-sm text-white/70">AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Automate Your Business.{' '}
              <span className="gradient-text">Accelerate Your Growth</span> with AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              We eliminate manual work with AI automation, custom software, and intelligent workflows — so your team can focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {['AI Automation', 'CRM & ERP', 'WhatsApp Bots', 'Mobile Apps'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <GlowButton href="/contact" variant="primary" size="lg">
                Book Free AI Consultation
                <ArrowRight className="size-5" />
              </GlowButton>
              <GlowButton href="/portfolio" variant="secondary" size="lg">
                <Play className="size-5" />
                View Our Work
              </GlowButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: '100+', label: 'Projects' },
                { value: '95%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/40">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right dashboard */}
          <div className="relative py-12 lg:py-0">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Portfolio trust strip */}
      <div className="border-t border-white/5 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-white/30">
          Projects we&apos;ve delivered
        </p>
        <Marquee
          items={homepagePortfolioProjects.map((p) => p.name)}
          dark
          variant="pills"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="size-6 text-white/30" />
      </motion.div>
    </section>
  )
}
