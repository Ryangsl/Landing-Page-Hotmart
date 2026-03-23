import Container from "../ui/Container"
import Button from "../ui/Button"
import useCountdown from "../../hooks/useCountdown"

const guarantees = [
  { icon: '🔒', text: 'Pagamento seguro' },
  { icon: '✅', text: 'Garantia de 7 dias' },
  { icon: '⚡', text: 'Acesso imediato' },
  { icon: '📱', text: 'Leia em qualquer dispositivo' },
]

export default function Offer() {
  const time = useCountdown(600)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <Container>
        <div className="text-center max-w-lg mx-auto">

          {/* LABEL */}
          <div className="inline-block bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-6 uppercase">
            Oferta por tempo limitado
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Nao perca essa
            <span className="text-amber-400"> oportunidade</span>
          </h2>

          <p className="mt-3 text-slate-400 text-sm">
            Esta oferta especial pode ser encerrada a qualquer momento.
          </p>

          {/* TIMER */}
          <div className="mt-6 flex justify-center gap-3">
            {[
              { value: String(minutes).padStart(2, '0'), label: 'minutos' },
              { value: String(seconds).padStart(2, '0'), label: 'segundos' },
            ].map((t) => (
              <div key={t.label} className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 min-w-[70px]">
                <p className="text-3xl font-black text-white tabular-nums">{t.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t.label}</p>
              </div>
            ))}
          </div>

          {/* PRECO */}
          <div className="mt-8">
            <p className="text-slate-500 text-sm line-through">De R$ 97</p>
            <p className="text-6xl font-black text-white leading-none mt-1">R$ 27</p>
            <p className="text-slate-400 text-sm mt-2">pagamento unico · sem mensalidade</p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button href="#" variant="primary">
              QUERO GARANTIR AGORA POR R$ 27
            </Button>
          </div>

          {/* GARANTIAS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2 text-slate-400 text-xs">
                <span>{g.icon}</span>
                <span>{g.text}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
