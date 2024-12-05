import { useState } from 'react'
import { motion } from 'framer-motion'

const resumeData = [
  { category: 'Education', items: ['M.D. in progress', 'B.S. in Computer Science'] },
  { category: 'Skills', items: ['Plastic Surgery', 'AI Engineering', 'Bioinformatics', 'PC Building'] },
  { category: 'Certifications', items: ['Machine Learning Specialization', 'Advanced Bioinformatics Certificate'] },
  { category: 'Publications', items: ['AI in Medical Diagnosis', 'Genomic Data Analysis Techniques'] },
]

export default function InteractiveResume() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Interactive Resume</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {resumeData.map((category) => (
          <motion.button
            key={category.category}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
          >
            {category.category}
          </motion.button>
        ))}
      </div>
      {activeCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold mb-2">{activeCategory.category}</h3>
          <ul className="list-disc pl-5">
            {activeCategory.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

