"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial, Environment } from "@react-three/drei"

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[3, 0, -2]} scale={1.5}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.2}
        speed={1}
        roughness={0.3}
        transparent
        opacity={0.7}
      />
    </Sphere>
  )
}

function FloatingGeometry() {
  const group1 = useRef()
  const group2 = useRef()
  const group3 = useRef()

  useFrame((state) => {
    if (group1.current) {
      group1.current.rotation.x = state.clock.elapsedTime * 0.1
      group1.current.rotation.y = state.clock.elapsedTime * 0.15
      group1.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }
    if (group2.current) {
      group2.current.rotation.x = state.clock.elapsedTime * -0.08
      group2.current.rotation.z = state.clock.elapsedTime * 0.12
      group2.current.position.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.5
    }
    if (group3.current) {
      group3.current.rotation.y = state.clock.elapsedTime * 0.2
      group3.current.rotation.z = state.clock.elapsedTime * -0.1
      group3.current.position.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.4
    }
  })

  return (
    <>
      {/* Floating Cubes */}
      <group ref={group1} position={[-4, 2, -1]}>
        {[...Array(3)].map((_, i) => (
          <Box key={i} args={[0.4, 0.4, 0.4]} position={[i * 1.2, Math.sin(i) * 0.5, 0]}>
            <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
          </Box>
        ))}
      </group>

      {/* Floating Torus */}
      <group ref={group2} position={[4, -1, 1]}>
        <Torus args={[0.8, 0.3, 16, 32]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} />
        </Torus>
      </group>

      {/* Additional Geometric Elements */}
      <group ref={group3} position={[-2, -2, 2]}>
        <Box args={[0.6, 0.6, 0.6]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} />
        </Box>
      </group>
    </>
  )
}

function BusinessIcons() {
  const iconsRef = useRef()

  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.05
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

function ParticleField() {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <group ref={particlesRef}>
      {[...Array(20)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.05, 8, 8]}
          position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20]}
        >
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.3} />
        </Sphere>
      ))}
    </group>
  )
}

export default function HomeScene() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />

        <AnimatedSphere />
        <FloatingGeometry />
        <BusinessIcons />
        <ParticleField />

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
