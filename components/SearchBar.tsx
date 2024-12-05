import { useState } from 'react'
import { motion } from 'framer-motion'

const searchOptions = [
  { name: 'Medical Expertise', section: 'muscle' },
  { name: 'Bioinformatics', section: 'nerve' },
  { name: 'AI Projects', section: 'nerve' },
  { name: 'Coding Skills', section: 'bone' },
  { name: 'PC Building', section: 'bone' },
  { name: 'Resume', section: 'resume' },
]

export default function SearchBar({ setActiveSection }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)

  const filteredOptions = searchOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (option) => {
    setActiveSection(option.section)
    setSearchTerm('')
    setShowResults(false)
  }

  return (
    <div className="relative w-full max-w-md mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setShowResults(true)
        }}
        onFocus={() => setShowResults(true)}
        className="w-full p-2 border rounded"
        placeholder="Search portfolio sections..."
      />
      {showResults && searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full bg-white border rounded mt-1 shadow-lg"
        >
          {filteredOptions.map((option) => (
            <button
              key={option.name}
              className="w-full text-left p-2 hover:bg-gray-100"
              onClick={() => handleSearch(option)}
            >
              {option.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

