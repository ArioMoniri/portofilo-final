import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

export default function Model3D({ setActiveSection }) {
  const sphereRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    sphereRef.current.position.y = Math.sin(t / 1.5) / 10
    sphereRef.current.rotation.y += 0.01
  })

  return (
    <Sphere
      ref={sphereRef}
      args={[1, 32, 32]}
      onClick={(e) => {
        e.stopPropagation()
        setActiveSection('medical')
      }}
    >
      <meshStandardMaterial color="hotpink" />
    </Sphere>
  )
}

