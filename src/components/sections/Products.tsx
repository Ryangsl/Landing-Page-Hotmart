import Container from "../ui/Container"
import Button from "../ui/Button"
import SectionTitle from "../ui/SectionTitle"

const products = [
  {
    emoji: '🏥',
    title: 'Guia da Clinica',
    desc: 'Para pais que querem entender e cobrar o atendimento terapeutico do seu filho.',
    features: [
      'O que cobrar dos terapeutas',
      'Como avaliar a qualidade do atendimento',
      'Seus direitos como responsavel legal',
      'Perguntas essenciais para cada consulta',
    ],
    price: 'R$ 27',
    oldPrice: null,
    highlight: false,
    badge: null,
  },
  {
    emoji: '🏫',
    title: 'Guia da Escola',
    desc: 'Para pais que querem garantir uma inclusao educacional real e eficaz para seu filho.',
    features: [
      'O que a escola e obrigada a oferecer',
      'Como exigir apoio especializado',
      'Como evitar prejuizos pedagogicos',
      'Modelo de carta para a direcao',
    ],
    price: 'R$ 27',
    oldPrice: null,
    highlight: true,
    badge: 'MAIS PROCURADO',
  },
]

export default function Products() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <SectionTitle subtitle="Escolha o guia ideal para o seu momento atual.">
          Escolha o melhor para voce
        </SectionTitle>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 max-w-2xl mx-auto lg:max-w-none">
          {products.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-3xl p-6 flex flex-col gap-5 ${
                p.highlight
                  ? 'bg-white border-2 border-teal-500 shadow-xl'
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              {/* BADGE */}
              {p.badge && (
                <div className="absolute -top-3 left-5 bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow">
                  {p.badge}
                </div>
              )}

              {/* HEADER */}
              <div>
                <span className="text-3xl">{p.emoji}</span>
                <h3 className="mt-2 font-extrabold text-slate-900 text-xl">{p.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">checkmark</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* PRECO */}
              <div className={`rounded-xl p-4 ${p.highlight ? 'bg-teal-50' : 'bg-slate-50'}`}>
                {p.oldPrice && (
                  <p className="text-xs text-slate-400 line-through">{p.oldPrice}</p>
                )}
                <p className={`text-3xl font-black ${p.highlight ? 'text-teal-700' : 'text-slate-800'}`}>
                  {p.price}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">pagamento unico · acesso vitalicio</p>
              </div>

              {/* CTA */}
              <Button href="#" variant="primary">
                QUERO ESTE GUIA
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
