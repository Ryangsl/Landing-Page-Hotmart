import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

export default function Benefits() {
  const items = [
    {
      icon: "🏥",
      title: "Orientação Clínica",
      desc: "Saiba o que os profissionais devem oferecer",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      icon: "🏫",
      title: "Direitos na Escola",
      desc: "Entenda o que a escola é obrigada a garantir",
      borderColor: "border-l-4 border-orange-500"
    },
    {
      icon: "🛡️",
      title: "Evite Prejuízos",
      desc: "Identifique erros no atendimento",
      borderColor: "border-l-4 border-red-500"
    }
  ]

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle>O que você vai dominar</SectionTitle>

        <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                bg-white rounded-2xl p-5
                shadow-sm border
                ${item.borderColor}
              `}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}