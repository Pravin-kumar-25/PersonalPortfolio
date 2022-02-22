import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

const Body = () =>{
  return (
    <mesh>
      <sphereGeometry attach='geometry' args={[10,64,32]} />
      <meshBasicMaterial attach='material' color="blue" />
    </mesh>
  )
}

const Human = () => {
  return (
    <Canvas
      camera={{position:[0,0,40],fov:70}}
    >
      <ambientLight intensity={0.6} />
      <directionalLight color="blue"  position={[0,-2,0]} />
      <pointLight intensity={2.6} />

      {/* <group> */}
        <Body />
      {/* </group> */}
      <OrbitControls />
    </Canvas>
  )
}

export default Human