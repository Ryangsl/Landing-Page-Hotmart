type SectionTitleProps = {
  children: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionTitle({ children, subtitle, align = 'center', light = false }: SectionTitleProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center items-center'
  const titleColor = light ? 'text-white' : 'text-slate-900'
  const subtitleColor = light ? 'text-slate-300' : 'text-slate-500'

  return (
    <div className={`flex flex-col mb-10 ${alignClass}`}>
      <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight leading-tight ${titleColor}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base max-w-xl ${subtitleColor} ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
