import { motion } from 'framer-motion'

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `radial-gradient(circle, ${
              ['rgba(236, 72, 153, 0.6)', 'rgba(139, 92, 246, 0.6)', 'rgba(59, 130, 246, 0.6)'][
                Math.floor(Math.random() * 3)
              ]
            }, transparent)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
