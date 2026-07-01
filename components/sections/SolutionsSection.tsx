'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { SectionCTA } from '@/components/SectionCTA'
import { solutions } from '@/lib/data'

export function SolutionsSection() {
  return (
    <AnimatedSection className="section-dark relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="absolute left-0 top-0 size-96 rounded-full bg-[#2563EB]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 size-80 rounded-full bg-[#7C3AED]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Solutions"
          title="AI-Powered Solutions for Every Challenge"
          subtitle="From intelligent chatbots to enterprise ERP — we build the automation stack your business needs."
          dark
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={solution.href}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/50 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 transition-all group-hover:from-[#2563EB]/40 group-hover:to-[#7C3AED]/40">
                  <solution.icon className="size-6 text-[#06B6D4]" />
                </div>
                <h3 className="font-heading text-base font-bold text-white">{solution.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{solution.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#06B6D4] opacity-100 sm:opacity-70 sm:transition-opacity sm:group-hover:opacity-100">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <SectionCTA
          className="mt-12"
          variant="dark"
          title="Not sure which solution fits?"
          description="Our team will recommend the right mix of AI automation, CRM, ERP, or custom software for your goals."
        />
      </div>
    </AnimatedSection>
  )
}
