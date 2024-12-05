'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortfolioOutline() {
  const [activeSection, setActiveSection] = useState('about')
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [scanlineOffset, setScanlineOffset] = useState(0)

  // Glitch effect animation
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Scanline animation
  useEffect(() => {
    const scanlineAnimation = setInterval(() => {
      setScanlineOffset(prev => (prev + 1) % 100)
    }, 50)

    return () => clearInterval(scanlineAnimation)
  }, [])

  const sections = [
    { id: 'about', title: 'About Me' },
    { id: 'experience', title: 'Work Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'volunteering', title: 'Volunteering' },
    { id: 'hobbies', title: 'Hobbies' },
  ]

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV 2024-25 .pdf';
    link.download = 'CV 2024-25 .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-gray-300 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 md:mb-0">Ariorad Moniri</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-400 text-gray-900 px-4 py-2 rounded font-bold"
          onClick={handleDownload}
        >
          Download CV
        </motion.button>
      </div>
      
      <div className="relative mb-8 bg-gray-900 p-6 rounded-lg border border-cyan-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image Section with Dystopian Effects */}
          <div className="relative group">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
              {/* Base Image */}
              <img
                src="/94786057-19CB-4432-AB56-A53A4F7BEDF1.jpeg"
                alt="Ariorad Moniri"
                className="w-full h-full object-cover"
              />
              
              {/* Glitch Overlay */}
              <AnimatePresence>
                {glitchEffect && (
                  <>
                    <motion.div
                      initial={{ x: -10, opacity: 0.5 }}
                      animate={{ x: 10, opacity: 0.8 }}
                      exit={{ x: 0, opacity: 0 }}
                      className="absolute inset-0 bg-cyan-400 mix-blend-screen"
                      style={{ clipPath: 'polygon(0 25%, 100% 25%, 100% 30%, 0 30%)' }}
                    />
                    <motion.div
                      initial={{ x: 10, opacity: 0.5 }}
                      animate={{ x: -10, opacity: 0.8 }}
                      exit={{ x: 0, opacity: 0 }}
                      className="absolute inset-0 bg-red-500 mix-blend-screen"
                      style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 50%, 0 50%)' }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Scanlines */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 255, 255, 0.1) 2px,
                    rgba(0, 255, 255, 0.1) 4px
                  )`,
                  transform: `translateY(${scanlineOffset}%)`,
                }}
              />

              {/* Terminal-style Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900 opacity-30" />
              
              {/* Data Points */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between text-xs text-cyan-400">
                  <span>ID: AM-2024-MD</span>
                  <span>STATUS: ACTIVE</span>
                </div>
                <div className="flex justify-between text-xs text-cyan-400">
                  <span>CLEARANCE: LEVEL 5</span>
                  <span>SECTOR: MEDICAL/TECH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info with Terminal Style */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <p className="text-lg text-cyan-400">SUBJECT PROFILE:</p>
            </div>
            <div className="space-y-2 font-mono">
              <p className="flex items-center">
                <span className="text-cyan-400 mr-2">[DESIGNATION]</span>
                <span>Medical Student / Research Fellow</span>
              </p>
              <p className="flex items-center">
                <span className="text-cyan-400 mr-2">[CONTACT]</span>
                <span>ariorad.moniri@live.acibadem.edu.tr</span>
              </p>
              <p className="flex items-center">
                <span className="text-cyan-400 mr-2">[COMM-LINK]</span>
                <span>+90 538 618 5475</span>
              </p>
              <p className="flex items-center">
                <span className="text-cyan-400 mr-2">[NETWORK]</span>
                <a 
                  href="https://linkedin.com/in/ariorad-moniri-623b661b5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:underline"
                >
                  Initialize Connection Protocol
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-3 py-1 rounded transition-colors duration-200 ${activeSection === section.id ? 'bg-cyan-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4">
        {activeSection === 'about' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">About Me</h3>
            <p className="text-lg leading-relaxed">
              Dedicated medical student and research fellow with a passion for combining medicine and technology.
              Experienced in both wet and dry lab environments, with a focus on bioinformatics and biostatistics.
              Committed to advancing healthcare through innovative research and technological integration.
            </p>
          </motion.section>
        )}

        {activeSection === 'experience' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Work Experience</h3>
            <ul className="space-y-4">
              {[
                "Swedish Undiagnosed Disease Network internship (2024, Karolinska Institutet, Stockholm)",
                "ChiCaP project internship under provision of Dr. Fulya Taylan (2024, Karolinska Institutet, Stockholm)",
                "Postman Student Ambassador (2024)",
                "ML Algorithms in Pancreas Cancer data in Ramon y Cajal Hospital under provisions of Dr. Julie Earl (2024, Madrid)",
                "Google Developer Student Program (GDSC) (2023)",
                "Research Intern in Geniva Gennext (2023)",
                "Research Intern in EpigenetiX (2023)",
                "Mendelian Randomization and PRS internship in Pisa University under the expertise of Prof. Daniele Campa (2023, Pisa University)",
                "STSM (Short Term Scientific Mission) Cost Action 21116",
                "Amboss Student Ambassador (2023)",
                "Streamlit Student Ambassador (2023)",
                "Osmosis Medical Education Fellowship (OMEF) Program (Student Ambassador) (2022)",
                "Head of Teacher Assistants in Bioinformatics & Biostatistics (2022, Acibadem University, Istanbul)",
                "Wet lab internship in EpigenetiX and Hatirnaz Labs (2022, Acibadem University, Istanbul)",
                "Dry Lab internship under the provision of Dr. Ozkan Ozdemir (2022, Acibadem University, Istanbul)",
                "Obstetrics & Gynecology Internship with Dr. Ahmet Cem Batukan and Prof. Faruk Suat Dede (2022, Maslak Hospital, Istanbul)",
                "Chemometry Internship at Yildiz Teknik University (2022, Istanbul)",
                "Pediatric Genetics internship with Dr. Yasemin Alanay (2021, Maslak Hospital, Istanbul)",
                "Research Intern (2021, Acibadem University)"
              ].map((experience, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded">
                  <span className="text-cyan-400 mr-2">▹</span>{experience}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {activeSection === 'education' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
            <ul className="space-y-6">
              <li className="bg-gray-700 p-4 rounded">
                <h4 className="text-lg font-semibold text-cyan-400">Doctor of Medicine</h4>
                <p>Institution: Acibadem University</p>
                <p>Since: 2021</p>
                <p>Year of Graduation: 2027</p>
                <p>GPA: 3.91 (Dean's List)</p>
              </li>
              <li className="bg-gray-700 p-4 rounded">
                <h4 className="text-lg font-semibold text-cyan-400">Minor in Computer Engineering</h4>
                <p>Institution: Acibadem University</p>
                <p>Since: 2022</p>
                <p>Year of Graduation: 2027</p>
              </li>
              <li className="bg-gray-700 p-4 rounded">
                <h4 className="text-lg font-semibold text-cyan-400">National Organization for Development of Exceptional Talents (Sampad)</h4>
                <p>Biology/Biological Sciences</p>
                <p>May 2015 - May 2021</p>
                <p>Grade: 19.9/20</p>
              </li>
            </ul>
          </motion.section>
        )}

        {activeSection === 'skills' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Relevant Skills</h3>
            <ul className="space-y-2">
              {["Wet Lab Experience", "Dry Lab Experience", "Python - R (Advanced)", "Pytorch", "LLMOps"].map((skill, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <span className="text-cyan-400 mr-2">▹</span>{skill}
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold my-4 text-cyan-400">Languages</h4>
            <ul className="space-y-2">
              {["Turkish (Native)", "English (C1)", "Persian (Native)", "Azerbaijani", "Russian (A1)", "German (A1)", "Arabic (A1)"].map((language, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  <span className="text-cyan-400 mr-2">▹</span>{language}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {activeSection === 'certifications' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              <span className="mr-2">🏆</span>Certifications
            </h3>
            <ul className="space-y-4">
              {[
                "Experimental Animals Certificate (2024)",
                "Lab Safety (Acibadem University, 2022)",
                "Genome Variant Prioritization in Medical Genetics (Acibadem University ACURARE)",
                "Dean's List for Academic Excellence (2021-2022)"
              ].map((cert, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded">
                  <span className="text-cyan-400 mr-2">▹</span>{cert}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {activeSection === 'volunteering' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              <span className="mr-2">🤝</span>Volunteering
            </h3>
            <ul className="space-y-4">
              {[
                "Assistant Manager For Pediatry (Acibadem University ACUTBAT, 2022 - Present)",
                "Assistant Officer in Research Exchange (TurkMSIC, 2021- Present)",
                "Preparing Acibadem University's 2023 - 2024 Medical school year schedule with the use of AI model (Schedule Optimizer) (Acibadem University, 2023)"
              ].map((volunteer, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded">
                  <span className="text-cyan-400 mr-2">▹</span>{volunteer}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {activeSection === 'hobbies' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              <span className="mr-2">🏃‍♂️</span>Hobbies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Body Building", "Sketching", "Amateur Boxing", "Sailing", "Swimming", "Tennis", "Rugby", "Tango"].map((hobby, index) => (
                <div key={index} className="bg-gray-700 p-3 rounded text-center">
                  <span className="text-cyan-400 block text-2xl mb-2">
                    {hobby === "Body Building" ? "💪" :
                     hobby === "Sketching" ? "🎨" :
                     hobby === "Amateur Boxing" ? "🥊" :
                     hobby === "Sailing" ? "⛵" :
                     hobby === "Swimming" ? "🏊" :
                     hobby === "Tennis" ? "🎾" :
                     hobby === "Rugby" ? "🏉" :
                     "💃"}
                  </span>
                  {hobby}
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

