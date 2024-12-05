'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HumanModel from '@/components/HumanModel'
import EasterEgg from '@/components/EasterEgg'
import PortfolioButton from '@/components/PortfolioButton'
import CreatorBanner from '@/components/CreatorBanner'

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [modelRotation, setModelRotation] = useState(0)
  const [showPortfolioButton, setShowPortfolioButton] = useState(false)
  const [modelZoom, setModelZoom] = useState(100)
  const [hasShownPortfolioButton, setHasShownPortfolioButton] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollPercentage = mainRef.current.scrollTop / (mainRef.current.scrollHeight - mainRef.current.clientHeight)
        if (scrollPercentage > 0.9 || modelZoom <= 10) {
          setShowEasterEgg(true)
          setShowPortfolioButton(false)
        } else {
          setShowEasterEgg(false)
          if (hasShownPortfolioButton) {
            setShowPortfolioButton(true)
          }
        }
      }
    }

    const currentMainRef = mainRef.current
    if (currentMainRef) {
      currentMainRef.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentMainRef) {
        currentMainRef.removeEventListener('scroll', handleScroll)
      }
    }
  }, [modelZoom, hasShownPortfolioButton])

  useEffect(() => {
    const unlockAfterDelay = () => {
      timeoutRef.current = setTimeout(() => {
        if (!hasShownPortfolioButton) {
          setShowPortfolioButton(true)
          setHasShownPortfolioButton(true)
        }
      }, 6000) // Changed to 6 seconds
    }

    unlockAfterDelay()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [hasShownPortfolioButton])

  return (
    <main ref={mainRef} className="relative h-screen overflow-y-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="sticky top-0 left-0 w-full h-screen">
        <HumanModel onRotationChange={setModelRotation} onZoomChange={setModelZoom} />
      </div>
      <CreatorBanner />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <h1 className="text-4xl font-bold mb-4">Dr. Moniri's Portfolio</h1>
        <p className="text-xl mb-8">Explore the human model to unlock secrets</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="text-lg"
        >
          <p>Shift your gaze, for in the crucible of patience,</p>
          <p>revelations bloom like flowers after rain.</p>
        </motion.div>
      </div>
      <div className="h-screen"></div> {/* Spacer to allow scrolling */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            key={showEasterEgg ? 'visible' : 'hidden'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-900 bg-opacity-90 p-8"
          >
            <EasterEgg />
          </motion.div>
        )}
      </AnimatePresence>
      {showPortfolioButton && <PortfolioButton />}
    </main>
  )
}

