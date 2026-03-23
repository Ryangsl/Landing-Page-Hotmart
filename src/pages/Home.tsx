import Hero from "../components/sections/Hero"
import TrustBar from "../components/sections/TrustBar"
import VideoSection from "../components/sections/VideoSection"
import Benefits from "../components/sections/Benefits"
import Products from "../components/sections/Products"
import Combo from "../components/sections/Combo"
import Testimonials from "../components/sections/Testimonials"
import Offer from "../components/sections/Offer"
import PopupProof from "../components/sections/PopupProof"
import StickyCTA from "../components/layout/StickyCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <VideoSection />
      <Benefits />
      <Products />
      <Combo />
      <Testimonials />
      <Offer />
      <PopupProof />
      <StickyCTA />
    </>
  )
}
