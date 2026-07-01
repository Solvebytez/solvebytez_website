'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { whyChoose } from '@/lib/data'

export function WhyChooseSection() {
  return (
    <AnimatedSection className="section-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="Why Solvebytez"
              title="Your Partner in AI Transformation"
              subtitle="We don't just build software — we engineer competitive advantages."
              centered={false}
            />
            <div className="space-y-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-all hover:border-[#2563EB]/30 hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">
                    <Check className="size-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#0B1120]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#64748B]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 blur-2xl" />
            <div className="relative rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-2xl">
              <div className="mb-6 text-center">
                <p className="text-sm font-medium text-[#64748B]">Solvebytez Impact Score</p>
                <p className="font-heading text-6xl font-bold gradient-text">A+</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Delivery Speed', value: 96 },
                  { label: 'Code Quality', value: 98 },
                  { label: 'Client Retention', value: 94 },
                  { label: 'AI Innovation', value: 99 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-[#64748B]">{bar.label}</span>
                      <span className="font-semibold text-[#0B1120]">{bar.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
