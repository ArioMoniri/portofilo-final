import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AIDemo() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real implementation, you would call your AI model API here
    setResponse(`This is a simulated AI response to: "${input}". In a full implementation, this would demonstrate LLM capabilities.`)
  }

  return (
    <div className="mt-4 p-4 bg-purple-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">AI Assistant Demo</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ask the AI a question"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow"
        >
          <h4 className="font-semibold mb-2">AI Response:</h4>
          <p>{response}</p>
        </motion.div>
      )}
    </div>
  )
}

