import type { MetadataRoute } from 'next'
import { siteUrl, sitemapRoutes } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
