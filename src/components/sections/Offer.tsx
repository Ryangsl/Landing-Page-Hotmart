import Container from "../ui/Container"
import Button from "../ui/Button"
import useCountdown from "../../hooks/useCountdown"

export default function Offer() {
  const time = useCountdown(600)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <section className="py-12">
      <Container>

        <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl p-6 text-center shadow-md border-2 border-yellow-300">

          <h2 className="text-lg font-bold text-gray-800">
            ⏰ Oferta especial por tempo limitado
          </h2>

          <p className="line-through text-gray-500 mt-2">
            De R$ 97
          </p>

          <p className="text-3xl font-bold text-red-600">
            R$ 27
          </p>

          <div className="mt-3 bg-red-500 text-white px-4 py-2 rounded-full inline-block font-bold text-sm">
            Expira em: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>

          <div className="mt-5">
            <Button href="#">
              QUERO GARANTIR AGORA
            </Button>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            ✅ Garantia de 7 dias ou seu dinheiro de volta
          </p>

        </div>

      </Container>
    </section>
  )
}