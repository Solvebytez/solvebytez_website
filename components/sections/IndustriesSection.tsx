'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { industries } from '@/lib/data'

export function IndustriesSection() {
  return (
    <AnimatedSection className="section-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries"
          title="Built for Your Industry"
          subtitle="Deep domain expertise across sectors that demand precision, compliance, and scale."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href="/industries"
                className="group flex flex-col items-center rounded-3xl border border-[#E2E8F0] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#2563EB]/30 hover:shadow-xl"
              >
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 transition-all group-hover:from-[#2563EB]/20 group-hover:to-[#7C3AED]/20">
                  <industry.icon className="size-8 text-[#2563EB] transition-colors group-hover:text-[#7C3AED]" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-[#0B1120]">{industry.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">{industry.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
