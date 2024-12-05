import { useState } from 'react'
import { motion } from 'framer-motion'
import BioinformaticsDemo from './BioinformaticsDemo'
import AIDemo from './AIDemo'

const nerveRegions = [
  { name: 'Brain', description: 'AI and neural network expertise' },
  { name: 'Spinal Cord', description: 'Data flow and processing techniques' },
  { name: 'Peripheral Nerves', description: 'Distributed computing and edge AI' },
  // Add more nerve regions as needed
]

export default function NerveLayer() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [showDemo, setShowDemo] = useState(null)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bioinformatics, AI, and Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {nerveRegions.map((region) => (
          <motion.button
            key={region.name}
            className="bg-blue-500 text-white p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedRegion(region)}
          >
            {region.name}
          </motion.button>
        ))}
      </div>
      {selectedRegion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold">{selectedRegion.name}</h3>
          <p>{selectedRegion.description}</p>
          <div className="mt-2 space-x-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setShowDemo('bioinformatics')}
            >
              Bioinformatics Demo
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded"
              onClick={() => setShowDemo('ai')}
            >
              AI Demo
            </button>
          </div>
        </motion.div>
      )}
      {showDemo === 'bioinformatics' && <BioinformaticsDemo />}
      {showDemo === 'ai' && <AIDemo />}
    </div>
  )
}

