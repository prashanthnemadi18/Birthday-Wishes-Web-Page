import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            y: -100,
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        >
          <Heart
            className="text-pink-500/30"
            size={Math.random() * 30 + 20}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  )
}
