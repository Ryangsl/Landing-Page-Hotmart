import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

const items = [
  {
    number: '01',
    icon: '🏥',
    title: 'Orientacao Clinica Completa',
    desc: 'Saiba exatamente quais terapias seu filho tem direito, o que cobrar dos profissionais e como identificar um atendimento de qualidade desde a primeira consulta.',
    accent: 'border-teal-500',
    numColor: 'text-teal-200',
    numBg: 'bg-teal-600',
  },
  {
    number: '02',
    icon: '🏫',
    title: 'Seus Direitos na Escola',
    desc: 'Entenda o que a escola e legalmente obrigada a oferecer para criancas com TEA e saiba como garantir uma inclusao educacional real e eficaz para seu filho.',
    accent: 'border-amber-500',
    numColor: 'text-amber-900',
    numBg: 'bg-amber-400',
  },
  {
    number: '03',
    icon: '🛡️',
    title: 'Proteja Seu Filho de Erros',
    desc: 'Aprenda a identificar falhas no atendimento, como agir quando algo estiver errado e quais perguntas fazer para garantir o suporte correto.',
    accent: 'border-rose-500',
    numColor: 'text-rose-100',
    numBg: 'bg-rose-500',
  },
]

export default function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionTitle subtitle="Em poucas horas de leitura voce vai saber exatamente o que exigir — e como exigir.">
          O que voce vai dominar
        </SectionTitle>

        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {items.map((item) => (
            <div
              key={item.number}
              className={`bg-white rounded-2xl p-6 shadow-md border-t-4 ${item.accent} flex flex-col gap-4`}
            >
              {/* NUMERO + ICONE */}
              <div className="flex items-center gap-3">
                <span className={`w-9 h-9 rounded-full ${item.numBg} ${item.numColor} flex items-center justify-center text-sm font-black flex-shrink-0`}>
                  {item.number}
                </span>
                <span className="text-2xl">{item.icon}</span>
              </div>

              {/* TEXTO */}
              <div>
                <h3 className="font-bold text-slate-900 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
