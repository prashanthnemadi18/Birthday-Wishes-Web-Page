import { motion } from 'framer-motion'
import MemoryCard from './MemoryCard'
import { Baby, Heart, Sparkles, Users, Church, HeartHandshake, Star, Gift } from 'lucide-react'

const memories = [
  {
    image: 'childhood.jpeg',
    title: 'Childhood Magic',
    caption: 'This little girl grew into the most beautiful soul I know. I\'m so proud to call you my sister. I will always protect you',
    color: 'from-pink-500 to-rose-500',
    icon: Baby,
    year: 'Early Years',
    captionIcons: [Heart, Sparkles, Heart]
  },
  {
    image: 'Mother-sister image.jpeg',
    title: 'Mom & Her Princess',
    caption: 'Happy Birthday to the beautiful daughter of our strong mother. You make our family proud every single day',
    color: 'from-purple-500 to-pink-500',
    icon: Heart,
    year: 'Growing Up',
    captionIcons: [Heart, Sparkles, Heart]
  },
  {
    image: '1st iamge .jpeg',
    title: 'First Memories',
    caption: 'We don\'t show love all the time, but our bond is unbreakable. Lucky to have you as my sister',
    color: 'from-blue-500 to-purple-500',
    icon: Sparkles,
    year: 'Precious Moments',
    captionIcons: [Sparkles, Heart, Sparkles]
  },
  {
    image: 'Bother and sister .jpeg',
    title: 'Partners in Crime',
    caption: 'Different personalities, one heart, one family. My strength is standing right beside me',
    color: 'from-indigo-500 to-blue-500',
    icon: Users,
    year: 'Sibling Bond',
    captionIcons: [Users, Heart, Sparkles]
  },
  {
    image: 'akka.JPG',
    title: 'My Beautiful Akka',
    caption: 'You shine brighter than any star. Your grace, your smile, your presence makes everything beautiful',
    color: 'from-purple-500 to-indigo-500',
    icon: Star,
    year: 'Radiant Soul',
    captionIcons: [Star, Heart, Sparkles]
  },
  {
    image: 'marrege image .jpeg',
    title: 'New Beginnings',
    caption: 'Seeing you start this new chapter makes me emotional and proud. May your life be filled with love, respect, and togetherness',
    color: 'from-pink-500 to-purple-500',
    icon: Church,
    year: 'Special Day',
    captionIcons: [Church, Heart, Sparkles]
  },
  {
    image: 'baby shower.JPG',
    title: 'Blessed Celebration',
    caption: 'A new chapter of joy and blessings. Celebrating the beautiful journey of motherhood with love and happiness',
    color: 'from-blue-400 to-pink-400',
    icon: Gift,
    year: 'New Blessing',
    captionIcons: [Gift, Heart, Sparkles]
  },
  {
    image: 'love .jpeg',
    title: 'Love & Happiness',
    caption: 'This picture radiates pure love and joy! Your happiness is contagious. May your life always be filled with this much love and beautiful moments',
    color: 'from-red-500 to-pink-500',
    icon: HeartHandshake,
    year: 'Forever Love',
    captionIcons: [Heart, HeartHandshake, Sparkles]
  }
]

export default function MemoryGallery({ setCurrentSection }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-serif px-4">Our Journey Together</h2>
          <p className="text-lg sm:text-xl text-white/80 font-light italic px-4">Every moment, every memory, every smile</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 hidden lg:block" />

          {/* Memory Cards */}
          <div className="space-y-24">
            {memories.map((memory, index) => (
              <div key={index} className="relative">
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse-slow">
                    <memory.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Memory Card - Alternating Left/Right on Desktop, Centered on Mobile */}
                <div className={`w-full lg:w-[48%] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <MemoryCard memory={memory} index={index} isLeft={index % 2 === 0} />
                </div>

                {/* Year Label */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`absolute top-8 hidden lg:block ${
                    index % 2 === 0 ? 'right-0 pr-8' : 'left-0 pl-8'
                  }`}
                >
                  <div className="text-white/40 text-sm font-bold">{memory.year}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 sm:mt-32 mb-12 sm:mb-20 relative z-50 px-4"
        >
          <button
            onClick={() => {
              console.log('Button clicked - navigating to final');
              setCurrentSection('final');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg sm:text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all cursor-pointer hover:scale-110 active:scale-95"
          >
            See Final Message 💌
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
