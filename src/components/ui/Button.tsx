type ButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        block w-full text-center
        bg-green-600 text-white
        py-4 rounded-2xl
        font-semibold
        shadow-md
        hover:shadow-lg
        hover:scale-[1.02]
        active:scale-95
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </a>
  )
}