import Container from "../ui/Container"
import Button from "../ui/Button"

const avatars = [
  { initials: 'JM', bg: 'bg-amber-400', text: 'text-amber-900' },
  { initials: 'RT', bg: 'bg-teal-400', text: 'text-teal-900' },
  { initials: 'AS', bg: 'bg-rose-400', text: 'text-rose-900' },
  { initials: 'LP', bg: 'bg-violet-400', text: 'text-violet-900' },
]

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 py-14 md:py-20">
      <Container className="flex flex-col md:flex-row gap-10 md:gap-14 md:items-center">

        {/* TEXTO PRINCIPAL */}
        <div className="md:flex-1 text-white">

          {/* BADGE CATEGORIA */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-teal-100 mb-6">
            <span>💚</span>
            <span>Guia para Pais de Criancas Neurodivergentes</span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Seu filho merece o melhor suporte.
            <br />
            <span className="text-amber-400">Voce sabe cobrar isso?</span>
          </h1>

          {/* SUB */}
          <p className="mt-5 text-teal-100 text-base md:text-lg leading-relaxed max-w-lg">
            Descubra o que a escola e a clinica sao <strong className="text-white font-semibold">legalmente obrigadas</strong> a oferecer para criancas com TEA — e como garantir esses direitos na pratica.
          </p>

          {/* SOCIAL PROOF INLINE */}
          <div className="mt-7 flex items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <div
                  key={a.initials}
                  className={`w-9 h-9 rounded-full ${a.bg} ${a.text} border-2 border-teal-800 flex items-center justify-center text-xs font-bold`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white">+1.200 familias</p>
              <p className="text-xs text-teal-300">5 estrelas · ja aplicaram este metodo</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 max-w-sm">
            <Button href="#" variant="primary">
              QUERO GARANTIR MINHA COPIA AGORA
            </Button>
            <p className="mt-2 text-xs text-teal-400 text-center">
              Acesso imediato · Garantia de 7 dias
            </p>
          </div>

          {/* BENEFICIOS RAPIDOS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Linguagem simples', 'Aplicacao imediata', 'Conteudo pratico'].map((b) => (
              <span
                key={b}
                className="bg-white/10 text-teal-100 text-xs px-3 py-1 rounded-full border border-white/10"
              >
                checkmark {b}
              </span>
            ))}
          </div>

        </div>

        {/* PRODUTO */}
        <div className="md:flex-1 flex justify-center">
          <div className="relative w-full max-w-xs">

            {/* BADGE */}
            <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-900 text-xs px-4 py-2 rounded-full shadow-xl font-black z-10 tracking-wide">
              LANCAMENTO
            </div>

            {/* CARD DO PRODUTO */}
            <div className="bg-white rounded-3xl shadow-2xl p-5">
              <img
                src="/images/ebook.png"
                alt="E-book Guia para Pais de Criancas com TEA"
                className="rounded-xl w-full object-cover"
              />

              {/* PRECO */}
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400 line-through">De R$ 97</p>
                <p className="text-4xl font-black text-teal-700 leading-none mt-1">R$ 27</p>
                <p className="text-xs text-slate-500 mt-1">Acesso vitalicio · PDF + Checklist</p>
              </div>

              {/* MINI CTA */}
              <div className="mt-4">
                <Button href="#" variant="primary">
                  GARANTIR ACESSO
                </Button>
              </div>
            </div>

            {/* ETIQUETA FLUTUANTE */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs px-5 py-2 rounded-full shadow-lg whitespace-nowrap font-semibold">
              Guia Completo para Pais
            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}
