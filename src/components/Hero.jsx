import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero({ setCurrentSection }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Particles />
      
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, bounce: 0.4 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-gradient mb-4 sm:mb-6 drop-shadow-2xl font-serif">
            Happy Birthday
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg font-script italic">
            Akka! 🎉
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl text-pink-300 mb-6 sm:mb-8 font-script italic">
            (Anjali)
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto font-light italic px-4"
        >
          Celebrating 24 years of your beautiful journey
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 0 60px rgba(236, 72, 153, 0.8), 0 0 100px rgba(139, 92, 246, 0.5)' 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentSection('gallery')}
          className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg sm:text-2xl font-bold rounded-full shadow-2xl shadow-purple-500/50 transition-all duration-500 animate-pulse-slow"
        >
          Begin the Journey 💝
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 text-white/60 text-lg font-light"
        >
          February 23, 2026
        </motion.div>
      </div>

      {/* Floating Balloons */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl"
          initial={{ y: '100vh', x: `${20 + i * 20}%` }}
          animate={{
            y: ['-20vh', '-10vh', '-20vh'],
            x: [`${20 + i * 20}%`, `${25 + i * 20}%`, `${20 + i * 20}%`],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          🎈
        </motion.div>
      ))}
    </motion.section>
  )
}
