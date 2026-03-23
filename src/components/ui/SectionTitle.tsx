type SectionTitleProps = {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-lg font-semibold text-center mb-6">
      {children}
    </h2>
  )
}
