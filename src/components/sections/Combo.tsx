import Container from "../ui/Container"
import Button from "../ui/Button"

export default function Combo() {
  return (
    <section className="py-12">
      <Container>

        <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-3xl p-6 shadow-lg">

          <h2 className="text-lg font-bold text-center">
            Leve os 2 guias com desconto
          </h2>

          <p className="text-center text-sm mt-2 opacity-90">
            🏥 Clínica + 🏫 Escola
          </p>

          <div className="text-center mt-4">
            <p className="line-through text-sm opacity-70">
              De R$ 54
            </p>

            <p className="text-3xl font-bold">
              R$ 37
            </p>

            <p className="text-sm mt-2 bg-white/20 inline-block px-3 py-1 rounded-full">
              💰 Economize R$ 17!
            </p>
          </div>

          <div className="mt-5">
            <Button href="#">
              QUERO OS DOIS
            </Button>
          </div>

        </div>

      </Container>
    </section>
  )
}