import Container from "../ui/Container"
import Button from "../ui/Button"

export default function Products() {
  return (
    <section className="py-12 bg-gray-50">
      <Container>

        <h2 className="text-lg font-semibold text-center mb-6">
          Escolha o melhor para o seu momento
        </h2>

        <div className="space-y-5">

          {/* PRODUTO 1 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border">

            <h3 className="font-semibold text-base">
              📘 Guia da Clínica
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Saiba exatamente o que os profissionais devem oferecer e como identificar falhas no atendimento.
            </p>

            {/* FEATURES */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>✔ O que cobrar dos terapeutas</p>
              <p>✔ Como identificar erros</p>
              <p>✔ Direitos do seu filho</p>
            </div>

            {/* PREÇO */}
            <div className="mt-4">
              <p className="text-xl font-bold text-green-600">
                R$ 27
              </p>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <Button href="#">
                ESCOLHER
              </Button>
            </div>

          </div>

          {/* PRODUTO 2 (DESTAQUE) */}
          <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-green-500 relative">

            {/* BADGE */}
            <div className="absolute -top-3 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
              MAIS PROCURADO
            </div>

            <h3 className="font-semibold text-base mt-2">
              🏫 Guia da Escola
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Entenda o que a escola deve garantir para o desenvolvimento do seu filho.
            </p>

            {/* FEATURES */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>✔ Direitos na escola</p>
              <p>✔ O que exigir da instituição</p>
              <p>✔ Como evitar prejuízos</p>
            </div>

            {/* PREÇO */}
            <div className="mt-4">
              <p className="text-xl font-bold text-green-600">
                R$ 27
              </p>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <Button href="#">
                ESCOLHER
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}