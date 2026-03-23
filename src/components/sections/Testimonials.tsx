import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"

type Testimonial = {
  text: string
  author: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: "Depois desse material, percebi erros graves no atendimento do meu filho.",
      author: "Juliana"
    },
    {
      text: "Finalmente entendi meus direitos na escola.",
      author: "Marcos"
    }
  ]

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <Container>
        <SectionTitle>O que outros pais estao dizendo</SectionTitle>

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-sm">
              <p className="text-sm text-gray-700">
                "{item.text}"
              </p>
              <p className="mt-2 text-xs font-semibold">
                — {item.author} ⭐⭐⭐⭐⭐
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
