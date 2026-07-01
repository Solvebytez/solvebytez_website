import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Main CTA Card */}
        <div className="relative glass-effect rounded-2xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Join hundreds of companies that trust us with their digital transformation journey. Let&apos;s build something amazing together.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-background hover:shadow-xl hover:shadow-primary/50 transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-primary rounded-lg font-semibold text-foreground hover:bg-primary/10 transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-foreground/60 mb-6">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Fortune 500', 'Startups', 'Enterprise', 'SMBs'].map((item) => (
                  <div key={item} className="text-center">
                    <p className="text-sm font-semibold text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
