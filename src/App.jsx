import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import MemoryGallery from './components/MemoryGallery'
import FinalMessage from './components/FinalMessage'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')
  const [bgGradient, setBgGradient] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const gradients = [
    'from-black via-gray-900 to-black',
    'from-gray-950 via-black to-gray-950',
    'from-black via-slate-950 to-black',
    'from-slate-950 via-gray-950 to-black',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgGradient((prev) => (prev + 1) % gradients.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradients[bgGradient]} transition-all duration-2000 relative overflow-hidden`}>
      {/* Floating Hearts */}
      <FloatingHearts />
      
      {/* Mouse Follow Gradient */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 animate-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <AnimatePresence mode="wait">
        {currentSection === 'hero' && (
          <Hero key="hero" setCurrentSection={setCurrentSection} />
        )}
        {currentSection === 'gallery' && (
          <MemoryGallery key="gallery" setCurrentSection={setCurrentSection} />
        )}
        {currentSection === 'final' && (
          <FinalMessage key="final" setCurrentSection={setCurrentSection} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
