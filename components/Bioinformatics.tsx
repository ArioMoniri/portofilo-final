'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const dnaSequence = 'ATCG'
const puzzleLength = 8

export default function Bioinformatics() {
  const [puzzle, setPuzzle] = useState(generatePuzzle())
  const [solution, setSolution] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  function generatePuzzle() {
    return Array(puzzleLength).fill(null).map(() => dnaSequence[Math.floor(Math.random() * dnaSequence.length)]).join('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsCorrect(solution.toUpperCase() === puzzle)
  }

  return (
    <div className="bg-white bg-opacity-75 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Bioinformatics Puzzle</h2>
      <p className="mb-4">Match the DNA sequence: {puzzle}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          maxLength={puzzleLength}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter DNA sequence"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white p-2 rounded"
          type="submit"
        >
          Check Solution
        </motion.button>
      </form>
      {isCorrect !== null && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
        >
          {isCorrect ? 'Correct!' : 'Try again!'}
        </motion.p>
      )}
    </div>
  )
}

