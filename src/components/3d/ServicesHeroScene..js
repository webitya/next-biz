"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus, Environment } from "@react-three/drei"

function FloatingElements() {
  const group1 = useRef()
  const group2 = useRef()
  const group3 = useRef()

  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.y = state.clock.elapsedTime * 0.2
      group1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
    if (group2.current) {
      group2.current.rotation.x = state.clock.elapsedTime * 0.15
      group2.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (group3.current) {
      group3.current.rotation.y = state.clock.elapsedTime * -0.3
      group3.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.5
    }
  })

  return (
    <>
      {/* Central floating element */}
      <group ref={group1} position={[0, 0, 0]}>
        <Torus args={[2, 0.3, 16, 32]}>
          <meshStandardMaterial color="#4f46e5" transparent opacity={0.6} />
        </Torus>
      </group>

      {/* Marketing elements */}
      <group ref={group2} position={[3, 1, -1]}>
        <Box args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
        </Box>
        <Box args={[0.6, 0.6, 0.6]} position={[1.2, 0.5, 0.5]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
        </Box>
        <Box args={[0.4, 0.4, 0.4]} position={[-1.2, -0.5, 0.5]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
        </Box>
      </group>

      {/* Spheres */}
      <group ref={group3} position={[-3, -1, 1]}>
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </Sphere>
        <Sphere args={[0.4, 32, 32]} position={[1.2, 0.5, 0]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </Sphere>
        <Sphere args={[0.3, 32, 32]} position={[-1, -0.5, 0]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </Sphere>
      </group>
    </>
  )
}

function MarketingIcons() {
  const iconsRef = useRef()

  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.1
      iconsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <group ref={iconsRef}>
      {/* Chart/Graph representation */}
      <group position={[5, 1, -3]}>
        {[...Array(5)].map((_, i) => (
          <Box key={i} args={[0.2, 0.3 + i * 0.2, 0.2]} position={[i * 0.3 - 0.6, (0.3 + i * 0.2) / 2, 0]}>
            <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
          </Box>
        ))}
      </group>

      {/* Network nodes */}
      <group position={[-5, 0, -2]}>
        {[...Array(6)].map((_, i) => (
          <Sphere
            key={i}
            args={[0.1, 16, 16]}
            position={[Math.cos((i * Math.PI) / 3) * 1.5, Math.sin((i * Math.PI) / 3) * 1.5, 0]}
          >
            <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} />
          </Sphere>
        ))}
      </group>
    </group>
  )
}

function ConnectingLines() {
  const linesRef = useRef()

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={linesRef}>
      {/* Create some connecting lines between elements */}
      {[...Array(8)].map((_, i) => {
        const x1 = Math.cos((i * Math.PI) / 4) * 3
        const y1 = Math.sin((i * Math.PI) / 4) * 3
        const x2 = Math.cos(((i + 2) * Math.PI) / 4) * 3
        const y2 = Math.sin(((i + 2) * Math.PI) / 4) * 3

        return (
          <mesh key={i} position={[0, 0, 0]}>
            <boxGeometry args={[0.05, 0.05, Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)]} />
            <meshStandardMaterial color="#a855f7" transparent opacity={0.4} />
            {/* Position and rotate to connect the points */}
            <group position={[(x1 + x2) / 2, (y1 + y2) / 2, 0]} rotation={[0, 0, Math.atan2(y2 - y1, x2 - x1)]} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function ServicesHeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

        <FloatingElements />
        <MarketingIcons />
        <ConnectingLines />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
