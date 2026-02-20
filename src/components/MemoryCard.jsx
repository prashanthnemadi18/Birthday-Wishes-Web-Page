import { motion } from 'framer-motion'

export default function MemoryCard({ memory, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      className="glass rounded-3xl overflow-hidden card-hover relative group"
    >
      {/* Connecting Line Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className={`hidden lg:block absolute top-10 w-16 h-0.5 bg-gradient-to-r ${
          isLeft 
            ? 'right-full from-transparent to-purple-500' 
            : 'left-full from-purple-500 to-transparent'
        }`}
        style={{ transformOrigin: isLeft ? 'right' : 'left' }}
      />

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)',
          backgroundSize: '300% 300%',
          padding: '2px',
          zIndex: -1,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden bg-gradient-to-br from-black/40 to-black/20"
      >
        <div className="w-full min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] flex items-center justify-center p-2 sm:p-4">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            src={`/${memory.image}`}
            alt={memory.title}
            className="w-full h-full object-contain image-enhance max-h-[380px] sm:max-h-[480px]"
            style={{
              filter: 'brightness(1.05) contrast(1.1) saturate(1.15)',
            }}
          />
        </div>
        
        {/* Gradient Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6"
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-white drop-shadow-lg"
          >
            {memory.title}
          </motion.h3>
        </motion.div>

        {/* Animated Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4, type: 'spring' }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-xl cursor-pointer"
        >
          <memory.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Sparkle Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Caption Section with Staggered Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
        className={`bg-gradient-to-br ${memory.color} p-4 sm:p-8 relative overflow-hidden`}
      >
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
            style={{
              left: `${20 + i * 30}%`,
              bottom: 0,
            }}
          />
        ))}

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-3 relative z-10 font-serif"
        >
          {memory.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
          className="text-base text-white/95 leading-relaxed relative z-10 font-light"
        >
          {memory.caption}
        </motion.p>

        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.8, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          className="mt-4 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white relative z-10 cursor-pointer"
        >
          {memory.year}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
