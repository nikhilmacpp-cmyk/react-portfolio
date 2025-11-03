import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StartBackGround } from "../components/StartBackGround"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* BackGround Effects */}
      <StartBackGround />

      {/* Nav bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>

      {/* Simple Footer */}
    </div>
  )
}