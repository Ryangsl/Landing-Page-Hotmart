import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

type Testimonial = {
  text: string
  author: string
  role: string
  initials: string
  avatarBg: string
  avatarText: string
}

const testimonials: Testimonial[] = [
  {
    text: "Depois desse guia, percebi erros graves no atendimento do meu filho que jamais teria identificado sozinha. Mudou completamente como eu me relaciono com os profissionais de saude.",
    author: "Juliana M.",
    role: "Mae do Pedro, 7 anos (TEA nivel 2)",
    initials: "JM",
    avatarBg: "bg-amber-400",
    avatarText: "text-amber-900",
  },
  {
    text: "Finalmente entendi meus direitos na escola. Consegui garantir o apoio especializado que meu filho precisava logo apos aplicar o que aprendi no guia.",
    author: "Marcos T.",
    role: "Pai da Sofia, 9 anos",
    initials: "MT",
    avatarBg: "bg-teal-500",
    avatarText: "text-white",
  },
  {
    text: "Linguagem simples e objetiva. Em menos de uma hora de leitura ja tinha uma lista de perguntas para levar na proxima consulta. Recomendo a todos os pais.",
    author: "Ana R.",
    role: "Mae do Gabriel, 5 anos",
    initials: "AR",
    avatarBg: "bg-rose-400",
    avatarText: "text-rose-900",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-teal-900">
      <Container>
        <SectionTitle
          light
          subtitle="Pais de todo o Brasil ja transformaram o suporte dos seus filhos."
        >
          O que outros pais estao dizendo
        </SectionTitle>

        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {testimonials.map((t) => (
            <div key={t.initials} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4">

              {/* QUOTE MARK */}
              <span className="text-5xl text-amber-400 font-black leading-none select-none">"</span>

              {/* TEXTO */}
              <p className="text-sm text-teal-100 leading-relaxed flex-1">
                {t.text}
              </p>

              {/* ESTRELAS */}
              <p className="text-amber-400 text-sm tracking-widest">★★★★★</p>

              {/* AUTOR */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} ${t.avatarText} flex items-center justify-center text-sm font-black flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-teal-300">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
