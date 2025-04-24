import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Mission } from "@/components/mission"
import { Objectives } from "@/components/objectives"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Mission />
      <Objectives />
      <Footer />
      <BackToTop />
    </main>
  )
}
