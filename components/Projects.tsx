'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { name: 'AI-Powered Medical Diagnosis', description: 'Developed an AI model to assist in medical diagnoses' },
  { name: 'Bioinformatics Data Pipeline', description: 'Created a data pipeline for processing genomic data' },
  { name: 'Custom PC Build', description: 'Designed and built a high-performance computer for AI research' },
  // Add more projects as needed
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="bg-white bg-opacity-75 rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
      <div className="relative">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-4 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{projects[currentProject].name}</h3>
          <p>{projects[currentProject].description}</p>
        </motion.div>
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l"
        >
          &#8592;
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-r"
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

