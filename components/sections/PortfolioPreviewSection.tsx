import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/Cards/ProjectCard'

const portfolioItems = [
  {
    image: '/images/portfolio/project-1.png',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with real-time inventory',
  },
  {
    image: '/images/portfolio/project-2.png',
    title: 'Cloud Analytics',
    category: 'Cloud Solutions',
    description: 'Big data analytics platform processing millions of events',
  },
  {
    image: '/images/portfolio/project-3.png',
    title: 'AI Assistant',
    category: 'AI Integration',
    description: 'Intelligent chatbot powered by machine learning models',
  },
]

export default function PortfolioPreviewSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <SectionHeader
            pretitle="Recent Work"
            title="Featured Projects"
            description="Showcasing our latest successful implementations"
          />
          <Link
            href="/portfolio"
            className="px-6 py-2 rounded-lg font-semibold glass-effect hover:bg-white/20 transition-all whitespace-nowrap"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <ProjectCard
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                href={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
