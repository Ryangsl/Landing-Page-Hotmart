import Hero from "../components/sections/Hero"
import VideoSection from "../components/sections/VideoSection"
import Benefits from "../components/sections/Benefits"
import Products from "../components/sections/Products"
import Offer from "../components/sections/Offer"
import PopupProof from "../components/sections/PopupProof"
import StickyCTA from "../components/layout/StickyCTA"
import Testimonials from "../components/sections/Testimonials"
import Combo from "../components/sections/Combo"

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Benefits />
      <Products />
      <Combo />
      <Testimonials />
      <Offer />
      <PopupProof />
      <StickyCTA /> {/* SOMENTE ESSE fica fixo */}
    </>
  )
}