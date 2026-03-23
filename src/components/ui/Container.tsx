type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}