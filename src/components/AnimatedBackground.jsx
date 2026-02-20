import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${
              ['#ec4899', '#8b5cf6', '#3b82f6', '#f97316', '#06b6d4'][i]
            }, transparent)`,
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}
