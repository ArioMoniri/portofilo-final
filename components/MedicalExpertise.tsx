'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const bodyParts = [
  { name: 'Brain', description: 'Specialized in neurosurgery techniques' },
  { name: 'Heart', description: 'Experienced in cardiovascular procedures' },
  { name: 'Skin', description: 'Expert in dermatological surgeries and treatments' },
  // Add more body parts and descriptions
]

export default function MedicalExpertise() {
  const [selectedPart, setSelectedPart] = useState(null)

  return (
    <div className="bg-white bg-opacity-75 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Medical Expertise (Plastic Surgery Focus)</h2>
      <div className="grid grid-cols-2 gap-4">
        {bodyParts.map((part) => (
          <motion.button
            key={part.name}
            className="bg-blue-500 text-white p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPart(part)}
          >
            {part.name}
          </motion.button>
        ))}
      </div>
      {selectedPart && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-gray-100 rounded-lg"
        >
          <h3 className="text-xl font-semibold">{selectedPart.name}</h3>
          <p>{selectedPart.description}</p>
        </motion.div>
      )}
    </div>
  )
}

