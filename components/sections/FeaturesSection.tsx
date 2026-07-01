'use client'

import { motion } from 'framer-motion'
import {
  Brain, Cloud, Shield, TrendingUp, Rocket, Headphones, Plug, BarChart,
} from 'lucide-react'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { features } from '@/lib/data'

const featureIcons = [Brain, Cloud, Shield, TrendingUp, Rocket, Headphones, Plug, BarChart]

export function FeaturesSection() {
  return (
    <AnimatedSection className="section-dark relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-0 size-96 rounded-full bg-[#06B6D4]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform"
          title="Enterprise-Grade Features"
          subtitle="Built on a foundation of security, scalability, and intelligence."
          dark
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = featureIcons[i]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#06B6D4]/30 hover:bg-white/10"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#06B6D4]/10 transition-colors group-hover:bg-[#06B6D4]/20">
                  <Icon className="size-6 text-[#06B6D4]" />
                </div>
                <h3 className="font-heading text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
