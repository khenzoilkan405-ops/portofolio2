import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-[#f0f0f0] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
