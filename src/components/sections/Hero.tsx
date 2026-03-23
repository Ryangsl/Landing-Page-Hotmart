import Container from "../ui/Container"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-100 via-blue-50 to-green-50 py-10 md:py-16">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center">

        {/* TEXTO PRINCIPAL */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:flex-1">

          {/* HEADLINE */}
          <h1 className="text-3xl font-bold leading-tight text-gray-800">
            Você sabe se seu filho está recebendo o suporte que realmente precisa?
          </h1>

          {/* SUB */}
          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            Descubra exatamente o que cobrar da escola e da clínica para garantir o desenvolvimento correto do seu filho com TEA.
          </p>

          {/* PROVA SOCIAL */}
          <p className="text-xs text-gray-500 mt-3">
            Mais de 1.200 pais já aplicaram esse método
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Button href="#">
              QUERO GARANTIR ACESSO AGORA
            </Button>
          </div>

          {/* BENEFÍCIOS RÁPIDOS */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded-full">✔ Conteúdo prático</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">✔ Linguagem simples</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">✔ Aplicação imediata</span>
          </div>

        </div>

        {/* MOCK DO PRODUTO */}
        <div className="relative bg-white rounded-3xl shadow-xl p-4 md:flex-1 md:h-auto">

          {/* BADGE */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs px-4 py-2 rounded-full shadow-lg font-semibold">
            🆕 NOVO
          </div>

          {/* IMAGEM */}
          <img
            src="/images/ebook.png"
            alt="Ebook"
            className="rounded-xl w-full object-cover"
          />

          {/* ETIQUETA EXTRA (gatilho leve) */}
          <div className="absolute bottom-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
            📘 Guia Completo para Pais
          </div>

        </div>

      </Container>
    </section>
  )
}