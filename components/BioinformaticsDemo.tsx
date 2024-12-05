import { useState } from 'react'
import { motion } from 'framer-motion'

const dnaSequence = 'ATCG'
const puzzleLength = 8

export default function BioinformaticsDemo() {
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
    <div className="mt-4 p-4 bg-green-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Bioinformatics Puzzle</h3>
      <p className="mb-4">Match the DNA sequence: {puzzle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          maxLength={puzzleLength}
          className="w-full p-2 border rounded"
          placeholder="Enter DNA sequence"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-4 py-2 rounded"
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
          {isCorrect ? 'Correct! You've solved the bioinformatics puzzle.' : 'Try again!'}
        </motion.p>
      )}
    </div>
  )
}

