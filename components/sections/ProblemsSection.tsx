'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { AnimatedSection, SectionHeader } from '@/components/ui/primitives'
import { problems } from '@/lib/data'

export function ProblemsSection() {
  return (
    <AnimatedSection className="section-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Challenge"
          title="Problems We Solve"
          subtitle="Every business faces these bottlenecks. We turn them into competitive advantages with AI."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 card-hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-[#7C3AED]/0 transition-all duration-500 group-hover:from-[#2563EB]/5 group-hover:to-[#7C3AED]/5" />
              <div className="relative">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 transition-all group-hover:from-[#2563EB]/20 group-hover:to-[#7C3AED]/20">
                  <item.icon className="size-6 text-[#2563EB] transition-colors group-hover:text-[#7C3AED]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0B1120]">{item.problem}</h3>
                <div className="my-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />
                  <ArrowRight className="size-4 text-[#7C3AED]" />
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#06B6D4]" />
                  <p className="text-sm leading-relaxed text-[#64748B]">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
