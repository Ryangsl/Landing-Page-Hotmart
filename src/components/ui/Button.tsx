type ButtonVariant = 'primary' | 'ghost'

type ButtonProps = {
  children: React.ReactNode
  href: string
  variant?: ButtonVariant
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-amber-500 hover:bg-amber-400 text-slate-900',
  ghost: 'bg-white/10 hover:bg-white/20 text-white border border-white/30',
}

export default function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        block w-full text-center
        py-4 rounded-2xl
        font-bold tracking-wide
        shadow-md hover:shadow-lg
        hover:scale-[1.02] active:scale-95
        transition-all duration-200
        text-sm md:text-base
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </a>
  )
}
