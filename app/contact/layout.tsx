import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Book a free AI consultation with Solvebytez. Get a custom automation roadmap for your business.',
  path: '/contact',
  keywords: ['contact Solvebytez', 'free AI consultation', 'book consultation', 'IT services enquiry'],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      {children}
    </>
  )
}
