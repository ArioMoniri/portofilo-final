import { useState } from 'react'
import { motion } from 'framer-motion'
import CodingGame from './CodingGame'
import PCBuildDemo from './PCBuildDemo'

const bones = [
  { name: 'Skull', description: 'Logical thinking and problem-solving skills' },
  { name: 'Spine', description: 'Backbone of software architecture' },
  { name: 'Ribs', description: 'Data structure and algorithm proficiency' },
  // Add more bones as needed
]

export default function BoneLayer() {
  const [selectedBone, setSelectedBone] = useState(null)
  const [showDemo, setShowDemo] = useState(null)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">PC Engineering, Coding, and Foundational Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bones.map((bone) => (
          <motion.button
            key={bone.name}
            className="bg-gray-200 text-gray-800 p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedBone(bone)}
          >
            {bone.name}
          </motion.button>
        ))}
      </div>
      {selectedBone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold">{selectedBone.name}</h3>
          <p>{selectedBone.description}</p>
          <div className="mt-2 space-x-2">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => setShowDemo('coding')}
            >
              Coding Challenge
            </button>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={() => setShowDemo('pcbuild')}
            >
              PC Build Demo
            </button>
          </div>
        </motion.div>
      )}
      {showDemo === 'coding' && <CodingGame />}
      {showDemo === 'pcbuild' && <PCBuildDemo />}
    </div>
  )
}

