import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const badges = [
  { name: 'Explorer', description: 'Visited all sections', icon: '🏅' },
  { name: 'Puzzle Solver', description: 'Completed the bioinformatics puzzle', icon: '🧩' },
  { name: 'Code Master', description: 'Aced the coding challenge', icon: '💻' },
  { name: 'PC Builder', description: 'Assembled a complete PC', icon: '🖥️' },
  // Add more badges as needed
]

export default function BadgeSystem() {
  const [unlockedBadges, setUnlockedBadges] = useState([])
  const [showBadges, setShowBadges] = useState(false)

  // In a real implementation, you would update this based on user actions
  useEffect(() => {
    // Simulating unlocking badges after a delay
    const timer = setTimeout(() => {
      setUnlockedBadges(['Explorer', 'Puzzle Solver'])
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4">
      <motion.button
        className="bg-yellow-500 text-white p-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowBadges(!showBadges)}
      >
        🏆
      </motion.button>
      {showBadges && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-12 right-0 bg-white p-4 rounded shadow-lg"
        >
          <h3 className="font-bold mb-2">Your Badges</h3>
          <ul>
            {badges.map((badge) => (
              <li
                key={badge.name}
                className={`mb-2 ${unlockedBadges.includes(badge.name) ? 'text-black' : 'text-gray-400'}`}
              >
                <span className="mr-2">{badge.icon}</span>
                {badge.name} - {badge.description}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

