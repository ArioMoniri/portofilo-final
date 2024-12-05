'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PortfolioOutline from './PortfolioOutline'

export default function PortfolioButton() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  return (
    <>
      <motion.button
        className="fixed top-1/4 left-1/4 bg-transparent text-cyan-400 px-6 py-3 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 15% 100%, 0 70%)',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)',
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPortfolio(true)}
      >
        <span className="relative z-10 font-mono text-lg">Access Data</span>
        <motion.div
          className="absolute inset-0 bg-cyan-400"
          initial={{ y: '100%' }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 border-2 border-cyan-400" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 85% 100%, 15% 100%, 0 70%)',
        }} />
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400" style={{
          clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)',
        }} />
      </motion.button>
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 bg-gray-700 p-2 rounded-full"
                onClick={() => setShowPortfolio(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <PortfolioOutline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

