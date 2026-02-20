import { motion } from 'framer-motion'

export default function Navbar({ currentSection, setCurrentSection }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 shadow-lg shadow-purple-500/50 flex-shrink-0"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src="/childhood.jpeg"
                  alt="Anjali"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                />
              </div>
            </motion.div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-gradient">Anjali</div>
              <div className="text-xs sm:text-sm text-white/60">Birthday Special</div>
            </div>
          </motion.div>
          
          <div className="flex gap-2 sm:gap-6">
            {['hero', 'gallery', 'final'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSection(section)}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all text-xs sm:text-base ${
                  currentSection === section
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {section === 'hero' ? 'Home' : section === 'gallery' ? 'Memories' : 'Message'}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
