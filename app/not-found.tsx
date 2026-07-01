import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist on Solvebytez.',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-[#0B1120]">Page not found</h1>
      <p className="mt-4 max-w-md text-[#64748B]">
        The page you requested may have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-2xl gradient-primary px-6 py-3 font-semibold text-white"
      >
        Back to Home
      </Link>
    </section>
  )
}
