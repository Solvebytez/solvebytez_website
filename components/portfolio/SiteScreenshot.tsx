'use client'

import { useCallback, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { getLocalPreviewPath } from '@/lib/portfolio-projects'

interface SiteScreenshotProps {
  url: string
  domain: string
  displayDomain?: string
  alt: string
  className?: string
  accent?: string
  fallbackInitials?: string
  showChrome?: boolean
}

export function SiteScreenshot({
  url,
  domain,
  displayDomain,
  alt,
  className,
  accent = '#2563EB',
  fallbackInitials = 'SB',
  showChrome = true,
}: SiteScreenshotProps) {
  const sources = useMemo(
    () => [
      getLocalPreviewPath(domain),
      `/api/screenshot?url=${encodeURIComponent(url)}`,
      `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280`,
    ],
    [domain, url]
  )

  const [sourceIndex, setSourceIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const currentSrc = sources[sourceIndex]
  const label = displayDomain ?? domain

  const handleError = useCallback(() => {
    setLoaded(false)
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1)
    } else {
      setFailed(true)
    }
  }, [sourceIndex, sources.length])

  const handleLoad = useCallback(() => {
    setLoaded(true)
    setFailed(false)
  }, [])

  return (
    <div className={cn('relative overflow-hidden bg-[#E2E8F0]', className)}>
      {showChrome && (
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F1F5F9] px-3 py-2">
          <div className="size-2 rounded-full bg-red-400/80" />
          <div className="size-2 rounded-full bg-yellow-400/80" />
          <div className="size-2 rounded-full bg-green-400/80" />
          <div className="ml-2 h-4 flex-1 overflow-hidden rounded-md bg-white/80 px-2">
            <p className="truncate text-[9px] leading-4 text-[#94A3B8]">{label}</p>
          </div>
        </div>
      )}

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8FAFC]">
        {!loaded && !failed && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#E2E8F0] to-[#F1F5F9]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="size-8 animate-spin rounded-full border-2 border-[#E2E8F0] border-t-[#2563EB]" />
              <p className="text-[10px] text-[#94A3B8]">Generating preview...</p>
            </div>
          </div>
        )}

        {failed && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}
          >
            <div
              className="flex size-14 items-center justify-center rounded-2xl font-heading text-lg font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {fallbackInitials}
            </div>
            {showChrome && <p className="mt-3 text-xs font-medium text-[#64748B]">{label}</p>}
          </div>
        )}

        {!failed && (
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'h-full w-full object-cover object-top transition-all duration-500',
              loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
              'group-hover:scale-[1.03]'
            )}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  )
}
