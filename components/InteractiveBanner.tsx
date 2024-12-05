import { motion } from 'framer-motion'

const bannerItems = [
  { name: 'Medical', icon: '🩺' },
  { name: 'Bioinformatics', icon: '🧬' },
  { name: 'AI', icon: '🤖' },
  { name: 'PC', icon: '💻' },
  { name: 'Projects', icon: '🚀' },
  { name: 'Resume', icon: '📄' },
  { name: 'Contact', icon: '📧' },
]

export default function InteractiveBanner({ setActiveSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 z-50">
      <ul className="flex justify-center space-x-4">
        {bannerItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setActiveSection(item.name.toLowerCase())}
              className="text-white hover:text-yellow-300 transition-colors duration-200"
            >
              <span className="text-2xl mr-1">{item.icon}</span>
              <span className="hidden md:inline">{item.name}</span>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

