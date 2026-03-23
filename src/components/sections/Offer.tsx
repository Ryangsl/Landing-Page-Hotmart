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

        <div className="bg-yellow-100 rounded-3xl p-6 text-center shadow-md">

          <h2 className="text-lg font-bold">
            Oferta especial por tempo limitado
          </h2>

          <p className="line-through text-gray-500 mt-2">
            De R$ 97
          </p>

          <p className="text-3xl font-bold text-red-500">
            R$ 27
          </p>

          <p className="mt-2 font-semibold text-sm">
            ⚠️ Expira em: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>

          <div className="mt-5">
            <Button href="#">
              QUERO GARANTIR AGORA
            </Button>
          </div>

          <p className="text-xs text-gray-600 mt-3">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>

        </div>

      </Container>
    </section>
  )
}