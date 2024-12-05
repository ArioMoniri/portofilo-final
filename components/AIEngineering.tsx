'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AIEngineering() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real implementation, you would call your AI model API here
    setResponse(`This is a simulated AI response to: "${input}"`)
  }

  return (
    <div className="bg-white bg-opacity-75 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">AI Engineering Demo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Ask the AI a question"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white p-2 rounded"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-gray-100 rounded-lg"
        >
          <h3 className="text-xl font-semibold">AI Response:</h3>
          <p>{response}</p>
        </motion.div>
      )}
    </div>
  )
}

