import Container from "../ui/Container"

export default function Benefits() {
  const items = [
    {
      title: "Orientação Clínica",
      desc: "Saiba o que os profissionais devem oferecer"
    },
    {
      title: "Direitos na Escola",
      desc: "Entenda o que a escola é obrigada a garantir"
    },
    {
      title: "Evite Prejuízos",
      desc: "Identifique erros no atendimento"
    }
  ]

  return (
    <section className="py-10">
      <Container>

        <h2 className="text-lg font-semibold text-center mb-6">
          O que você vai dominar
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-5
                shadow-sm border
              "
            >
              <h3 className="font-semibold text-base">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}