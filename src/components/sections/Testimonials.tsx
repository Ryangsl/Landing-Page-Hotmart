import Container from "../ui/Container"

export default function Testimonials() {
  return (
    <section className="py-10 bg-gray-50">
      <Container>

        <h2 className="text-lg font-semibold text-center mb-6">
          O que outros pais estão dizendo
        </h2>

        <div className="space-y-4">

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-700">
              “Depois desse material, percebi erros graves no atendimento do meu filho.”
            </p>
            <p className="mt-2 text-xs font-semibold">
              — Juliana ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-700">
              “Finalmente entendi meus direitos na escola.”
            </p>
            <p className="mt-2 text-xs font-semibold">
              — Marcos ⭐⭐⭐⭐⭐
            </p>
          </div>

        </div>

      </Container>
    </section>
  )
}