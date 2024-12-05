'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CreatorBanner() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 p-4 z-50 flex justify-between items-center border-b border-cyan-400"
        >
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            <p className="text-cyan-400 font-mono">Model by davidgiraud</p>
          </div>
          <button
            className="text-cyan-400 hover:text-cyan-300 font-mono bg-gray-800 px-4 py-2 rounded-full border border-cyan-400 hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setShowBanner(false)}
          >
            Hide Banner
          </button>
        </motion.div>
      )}
      {!showBanner && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-4 left-4 bg-gray-900 bg-opacity-50 text-cyan-400 px-4 py-2 rounded-full z-50 border border-cyan-400 hover:bg-gray-800 transition-colors duration-300 font-mono"
          onClick={() => setShowBanner(true)}
        >
          Show Creator Info
        </motion.button>
      )}
    </AnimatePresence>
  )
}

