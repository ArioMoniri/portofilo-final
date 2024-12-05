import { useState } from 'react'
import { motion } from 'framer-motion'

const muscleGroups = [
  { name: 'Biceps', description: 'Expertise in arm lifts and muscle definition procedures.' },
  { name: 'Pectorals', description: 'Specialized in chest contouring and male breast reduction.' },
  { name: 'Abdominals', description: 'Advanced techniques in abdominal etching and tummy tucks.' },
  // Add more muscle groups as needed
]

export default function MuscleLayer() {
  const [selectedMuscle, setSelectedMuscle] = useState(null)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Medical Expertise (Plastic Surgery Focus)</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {muscleGroups.map((muscle) => (
          <motion.button
            key={muscle.name}
            className="bg-red-500 text-white p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMuscle(muscle)}
          >
            {muscle.name}
          </motion.button>
        ))}
      </div>
      {selectedMuscle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold">{selectedMuscle.name}</h3>
          <p>{selectedMuscle.description}</p>
          <div className="mt-2">
            <a href="#" className="text-blue-500 hover:underline">View related research</a>
          </div>
        </motion.div>
      )}
    </div>
  )
}

