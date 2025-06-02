"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Torus, Environment } from "@react-three/drei"

function ServiceRings() {
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * -0.2
      ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.3
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.4
      ring3Ref.current.rotation.z = state.clock.elapsedTime * -0.1
    }
  })

  return (
    <group>
      <Torus ref={ring1Ref} args={[2, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Torus>
      <Torus ref={ring2Ref} args={[1.5, 0.08, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" />
      </Torus>
      <Torus ref={ring3Ref} args={[1, 0.06, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Torus>
    </group>
  )
}

export default function ServicesScene() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <ServiceRings />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
