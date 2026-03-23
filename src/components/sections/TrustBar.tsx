import Container from "../ui/Container"

const stats = [
  { icon: '👨‍👩‍👦', value: '+1.200 Familias', label: 'ja foram ajudadas' },
  { icon: '⭐', value: '4.9 / 5', label: 'avaliacao media' },
  { icon: '🔒', value: 'Garantia de 7 dias', label: 'devolucao total' },
  { icon: '⚡', value: 'Acesso Imediato', label: 'apos a compra' },
]

export default function TrustBar() {
  return (
    <section className="bg-slate-900 py-5 border-b border-slate-800">
      <Container>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="font-bold text-sm text-white">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
