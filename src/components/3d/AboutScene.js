"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Box, Sphere, Torus } from "@react-three/drei"

function RotatingElements() {
  const group1 = useRef()
  const group2 = useRef()
  const group3 = useRef()

  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.y = state.clock.elapsedTime * 0.3
      group1.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
    if (group2.current) {
      group2.current.rotation.x = state.clock.elapsedTime * 0.2
      group2.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (group3.current) {
      group3.current.rotation.y = state.clock.elapsedTime * -0.4
      group3.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.5
    }
  })

  return (
    <>
      {/* Central rotating element */}
      <group ref={group1} position={[0, 0, 0]}>
        <Torus args={[1.5, 0.3, 16, 32]}>
          <meshStandardMaterial color="#4f46e5" transparent opacity={0.6} />
        </Torus>
      </group>

      {/* Floating business elements */}
      <group ref={group2} position={[3, 1, -1]}>
        <Box args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
        </Box>
      </group>

      <group ref={group3} position={[-3, -1, 1]}>
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </Sphere>
      </group>
    </>
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
        <Sphere
          key={i}
          args={[0.1, 16, 16]}
          position={[Math.cos((i * Math.PI) / 4) * 2.5, Math.sin((i * Math.PI) / 4) * 2.5, 0]}
        >
          <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

function BusinessGraphics() {
  const graphicsRef = useRef()

  useFrame((state) => {
    if (graphicsRef.current) {
      graphicsRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={graphicsRef}>
      {/* Chart bars */}
      <group position={[2, 0, 2]}>
        {[...Array(5)].map((_, i) => (
          <Box key={i} args={[0.2, 0.5 + i * 0.3, 0.2]} position={[i * 0.3 - 0.6, (0.5 + i * 0.3) / 2, 0]}>
            <meshStandardMaterial color="#f59e0b" transparent opacity={0.6} />
          </Box>
        ))}
      </group>
    </group>
  )
}

export default function AboutScene() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

        <RotatingElements />
        <NetworkNodes />
        <BusinessGraphics />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
