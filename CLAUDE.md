# Claude Code - Instruções para o Projeto Landing Hotmart

## 📋 Visão Geral do Projeto

Landing page de vendas para materiais digitais (ebooks sobre TEA para pais).
- **Stack:** React 19 + TypeScript + Tailwind CSS + Vite
- **Objetivo:** Converter visitantes em clientes
- **Público:** Pais de crianças com TEA
- **Abordagem:** Mobile-first, visual atrativo, CTAs bem distribuídos

---

## 🎯 Padrões e Convenções

### Estrutura de Componentes

```
src/
├── components/
│   ├── ui/              # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── SectionTitle.tsx
│   ├── sections/        # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Products.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Combo.tsx
│   │   ├── Offer.tsx
│   │   ├── VideoSection.tsx
│   │   └── PopupProof.tsx
│   └── layout/          # Layout components
│       └── StickyCTA.tsx
├── hooks/               # Custom React hooks
│   └── useCountdown.ts
├── pages/
│   └── Home.tsx         # Página principal
└── App.tsx              # Root component
```

### Tipagem TypeScript

- **Nunca usar `any`** — sempre criar interfaces explícitas
- Componentes com props recebem `type Props` ou `type ComponentNameProps`
- Exportar tipos reutilizáveis em arquivo separado se usado em múltiplos componentes

**Exemplo:**
```typescript
type ButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  // ...
}
```

### Tailwind CSS

- **Mobile-first:** Começar sem breakpoints, depois adicionar `sm:`, `md:`, `lg:`
- **Sem inline styles:** Usar Tailwind classes, nunca objetos `style={}`
- **Classes reutilizáveis:** Extrair padrões comuns em componentes (ex: `SectionTitle.tsx`)
- **Componentes de contexto:** `Container.tsx` para max-width responsivo

**Breakpoints ativos:**
- Mobile (padrão)
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)

### Componentes UI Padrão

#### SectionTitle
Títulos padronizados de seções.
```tsx
<SectionTitle>Seu título aqui</SectionTitle>
```

#### Container
Wrapper com max-width responsivo.
```tsx
<Container className="optional-extra-classes">
  {children}
</Container>
```

#### Button
CTA com tipagem correta.
```tsx
<Button href="/path" className="optional-classes">
  TEXTO DO BOTÃO
</Button>
```

#### Card
Cards genéricos com background e padding.
```tsx
<Card className="optional-extra-classes">
  {children}
</Card>
```

---

## 🔄 Refatorações Recentes

### Fase 1: Refatoração UI/UX (✅ Concluída)
- Corrigida tipagem `any` → interfaces TypeScript
- Melhorado visual (headlines maiores, cores mais vivas, badges com gradient)
- Ícones e bordas coloridas em Benefits
- Estoque de estilos mortos removido de App.css

### Fase 2: Padrões de Frontend (✅ Concluída)
- Criado componente `SectionTitle.tsx` para eliminar duplicação de classes
- Migrado `Card.tsx` de inline styles para Tailwind puro
- Implementado responsiveness com breakpoints `sm:`, `md:`, `lg:`
- Hero.tsx com layout lado-a-lado em desktop
- Benefits, Products, Testimonials com grids em desktop

---

## 🛠️ Desenvolvendo

### Iniciar dev server
```bash
npm run dev
```
Acessa em `http://localhost:5174`

### Compilar TypeScript + Build
```bash
npm run build
```

### Lint (ESLint)
```bash
npm run lint
```

---

## ✅ Checklist para Novas Features

Antes de fazer commit, garantir:

- [ ] **TypeScript:** Sem `any`, interfaces explícitas
- [ ] **Tailwind:** Sem inline styles, usar classes
- [ ] **Mobile-first:** Começar mobile, adicionar `md:` para desktop
- [ ] **Componentes:** Extrair padrões comuns em componentes reutilizáveis
- [ ] **SectionTitle:** Usar para todos os títulos de seção
- [ ] **Container:** Envolver seções com Container para max-width
- [ ] **Build:** Rodar `npm run build` sem erros
- [ ] **Responsiveness:** Testar em ~768px (tablet) e ~1024px (desktop)

---

## 🚀 Próximas Oportunidades

1. **Acessibilidade (WCAG 2.1 AA)**
   - Adicionar `aria-label`, `aria-live`
   - Usar `<button>` em vez de `<a>` quando apropriado
   - Validar links com `href` válido (não `#`)

2. **Performance**
   - `React.memo()` em componentes reutilizáveis
   - `useMemo` para arrays/objetos em renders

3. **Constantes Centralizadas**
   - Criar `src/constants.ts` com:
     - Preços (R$ 27, R$ 37, etc)
     - URLs de CTAs
     - Tempos (countdown 600s, popup 8000ms)
     - Scroll breakpoints (400px para StickyCTA)

4. **Hook Improvements**
   - `useCountdown.ts`: Adicionar dependência `initial` no useEffect
   - Debounce em scroll listeners

---

## 📞 Contato & Dúvidas

Para dúvidas sobre padrões, abra uma issue com:
- Qual componente/arquivo
- O que está tentando fazer
- Referência ao padrão no CLAUDE.md

---

**Última atualização:** 2026-03-23
**Versão do projeto:** 1.0.0
