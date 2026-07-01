interface SectionHeaderProps {
  pretitle?: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeader({
  pretitle,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {pretitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
          {pretitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-foreground/70 max-w-2xl text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
