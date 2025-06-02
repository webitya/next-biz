"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment } from "@react-three/drei"

function RotatingText() {
  const textRef = useRef()

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.1}
      position={[-1.5, 0, 0]}
    >
      NextBiz
      <meshStandardMaterial color="#8b5cf6" />
    </Text3D>
  )
}

function NetworkNodes() {
  const nodesRef = useRef()

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.x = state.clock.elapsedTime * 0.1
      nodesRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={nodesRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI) / 4) * 3, Math.sin((i * Math.PI) / 4) * 3, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export default function AboutScene() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <RotatingText />
        <NetworkNodes />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
