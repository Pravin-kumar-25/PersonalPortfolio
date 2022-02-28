import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Mesh = ({ color }) => {
    const meshRef = useRef();
    let random =  Math.random() * (0.04 - 0.005) + 0.009
    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += random
    })

    return (
        <mesh ref={meshRef}>
            <torusGeometry attach='geometry' args={[10, 3, 16, 100]} />
            <meshPhongMaterial attach='material' color={color} />
        </mesh>
    )
}

const Torus = ({ color, directionalLight }) => {
    return (
        <Canvas
            camera={{ position: [0, 0, 25], fov: 70 }}
        >
            <ambientLight />
            <directionalLight intensity={1.8} color={directionalLight} position={[0, -2, 0]} />
            <pointLight intensity={1.6} position={[2, 3, 1]} />

            <Mesh color={color} />
            <OrbitControls enableZoom='false' />
        </Canvas>
    )
}

export default Torus