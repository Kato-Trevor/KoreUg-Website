import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Mission } from "@/components/mission"
import { Objectives } from "@/components/objectives"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Objectives />
      <Projects />
      <Team />
      <Footer />
      <BackToTop />
    </main>
  )
}
