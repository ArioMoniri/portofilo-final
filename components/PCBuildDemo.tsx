import { useState } from 'react'
import { motion } from 'framer-motion'

const pcParts = [
  { name: 'CPU', icon: '🧠' },
  { name: 'GPU', icon: '🖼️' },
  { name: 'RAM', icon: '🧠' },
  { name: 'SSD', icon: '💾' },
  { name: 'Motherboard', icon: '🔌' },
  { name: 'Power Supply', icon: '🔋' },
]

export default function PCBuildDemo() {
  const [assembledParts, setAssembledParts] = useState([])

  const handleDragStart = (e, part) => {
    e.dataTransfer.setData('text/plain', part.name)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const partName = e.dataTransfer.getData('text')
    const part = pcParts.find(p => p.name === partName)
    if (part && !assembledParts.includes(part)) {
      setAssembledParts([...assembledParts, part])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">PC Build Simulator</h3>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h4 className="font-semibold mb-2">Available Parts</h4>
          <div className="grid grid-cols-2 gap-2">
            {pcParts.map((part) => (
              <motion.div
                key={part.name}
                draggable
                onDragStart={(e) => handleDragStart(e, part)}
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-200 p-2 rounded text-center cursor-move"
              >
                <span className="text-2xl mr-2">{part.icon}</span>
                {part.name}
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="w-full md:w-1/2 bg-indigo-200 p-4 rounded"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h4 className="font-semibold mb-2">Assembled PC</h4>
          {assembledParts.length === 0 ? (
            <p>Drag and drop parts here to assemble your PC</p>
          ) : (
            <ul>
              {assembledParts.map((part) => (
                <li key={part.name} className="mb-2">
                  <span className="text-2xl mr-2">{part.icon}</span>
                  {part.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

