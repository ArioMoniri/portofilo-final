import { useState } from 'react'
import { motion } from 'framer-motion'

const challenges = [
  {
    question: 'What will be the output of this code?\n\nconsole.log(2 + "2" - 1)',
    options: ['22', '3', '21', 'NaN'],
    correct: 1
  },
  {
    question: 'Which method is used to remove the last element from an array in JavaScript?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correct: 0
  },
  // Add more challenges as needed
]

export default function CodingGame() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (index) => {
    if (index === challenges[currentChallenge].correct) {
      setScore(score + 1)
    }
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetGame = () => {
    setCurrentChallenge(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Coding Challenge</h3>
      {!showResult ? (
        <>
          <p className="mb-4">{challenges[currentChallenge].question}</p>
          <div className="space-y-2">
            {challenges[currentChallenge].options.map((option, index) => (
              <motion.button
                key={index}
                className="w-full bg-yellow-500 text-white p-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Your Score: {score}/{challenges.length}</p>
          <motion.button
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
          >
            Play Again
          </motion.button>
        </div>
      )}
    </div>
  )
}

