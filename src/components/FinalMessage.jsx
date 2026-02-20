import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FinalMessage({ setCurrentSection }) {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
    setConfetti(newConfetti)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-3xl"
          initial={{ y: -100, x: `${item.left}%`, rotate: 0 }}
          animate={{
            y: '100vh',
            rotate: 360,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
          }}
        >
          {['🎉', '🎊', '🎈', '💝', '✨', '🎂'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        className="max-w-4xl mx-auto glass rounded-3xl p-6 sm:p-12 text-center relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl sm:text-8xl mb-6 sm:mb-8"
        >
          🎂
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient mb-6 sm:mb-8 font-serif px-4"
        >
          Happy 24th Birthday, Akka!
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl text-pink-300 mb-4 sm:mb-6 font-script italic px-4"
        >
          (Anjali)
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light italic px-4"
        >
          Akka, we've been through it all together - the silly fights over nothing, the loud arguments that made everyone laugh, and those quiet moments where words weren't needed. We fight like enemies but love like no one else can understand. You annoy me, I annoy you, but that's what makes us special. 
          <br /><br />
          From childhood mischief to grown-up responsibilities, you've always been my strength. Sometimes I don't say it, but I'm so proud of the woman you've become. Your smile lights up our home, your strength inspires me, and your love keeps our family together.
          <br /><br />
          On your 24th birthday, I want you to know - no matter how much we fight, no matter how crazy life gets, you'll always be my favorite person to argue with and my forever protector. May this year bring you all the happiness, success, and peace you deserve. Love you more than words can say! ❤️
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
          className="text-5xl sm:text-7xl mb-6 sm:mb-8 space-x-2 sm:space-x-4"
        >
          <motion.span animate={{ y: [0, -20, 0] }} transition={{ duration: 1, repeat: Infinity }}>🎁</motion.span>
          <motion.span animate={{ y: [0, -20, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>🎈</motion.span>
          <motion.span animate={{ y: [0, -20, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>✨</motion.span>
        </motion.div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentSection('hero')}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
        >
          Relive the Memories 🔄
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
