"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.5} speed={2} roughness={0} />
    </Sphere>
  )
}

function FloatingCubes() {
  const cubes = useRef()

  useFrame((state) => {
    if (cubes.current) {
      cubes.current.rotation.x = state.clock.elapsedTime * 0.1
      cubes.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={cubes}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 2) * 3, Math.cos(i * 2) * 3, Math.sin(i) * 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#06b6d4" />
        </mesh>
      ))}
    </group>
  )
}

export default function HomeScene() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <FloatingCubes />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
