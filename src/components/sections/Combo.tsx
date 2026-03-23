import Container from "../ui/Container"
import Button from "../ui/Button"

const included = [
  { icon: '🏥', label: 'Guia da Clinica', value: 'R$ 27' },
  { icon: '🏫', label: 'Guia da Escola', value: 'R$ 27' },
]

export default function Combo() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="bg-gradient-to-br from-teal-800 to-emerald-900 rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto">

          {/* BADGE */}
          <div className="inline-block bg-amber-400 text-slate-900 text-xs font-black px-4 py-1.5 rounded-full tracking-wide mb-5">
            MELHOR CUSTO-BENEFICIO
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Leve os dois guias
            <br />
            <span className="text-amber-400">com desconto especial</span>
          </h2>

          <p className="text-teal-200 text-sm mt-3">
            Clinica + Escola. Tudo que voce precisa para garantir o melhor suporte para seu filho.
          </p>

          {/* ITENS INCLUSOS */}
          <div className="mt-6 space-y-2">
            {included.map((item) => (
              <div key={item.label} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <span className="text-teal-300 text-xs line-through">{item.value}</span>
              </div>
            ))}
          </div>

          {/* PRECO */}
          <div className="mt-6 flex items-end gap-3">
            <div>
              <p className="text-teal-300 text-sm line-through">De R$ 54</p>
              <p className="text-5xl font-black text-white leading-none">R$ 37</p>
            </div>
            <div className="mb-1 bg-amber-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full">
              ECONOMIZE R$ 17
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7">
            <Button href="#" variant="primary">
              QUERO OS DOIS GUIAS AGORA
            </Button>
            <p className="text-xs text-teal-400 text-center mt-2">
              Acesso imediato · Garantia de 7 dias
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}
