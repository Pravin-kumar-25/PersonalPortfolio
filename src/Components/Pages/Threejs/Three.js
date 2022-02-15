import React from 'react'
import {Canvas, render} from '@react-three/fiber'
import BoxMesh from './BoxMesh'
// import { OrbitControls} from '@react-three/drei'

const Three = ({directionalColor,fov,objects}) => {

  const renderComponents = () => {
    return objects.map((object)=> {
      return (
        <BoxMesh color={object.color} speed={object.speed} isCircle={object.circle}
         position={object.position} 
         key={object.position}
         args={object.args}
         />
      )
    })
  }

  return (
    <Canvas
    camera={{ position: [-5, 2, 10], fov: fov }}
        
    >
        <ambientLight intensity={0.35}/>
        <directionalLight  color={directionalColor} position={[0,-2,0]}
        />
        <pointLight intensity={2.6} />
        {renderComponents()}
        {/* <BoxMesh color="yellow" speed={0.01} args={[1,0,2]} isCircle={true} position={[1,1,1]} />
        <BoxMesh color="orange" speed={0.02} args={[1,1,1]} position={[0,-1,0]}/>
        <BoxMesh color="red" speed={0.01} args={[1,1,2]} position={[2,-3,3]}/>
        <BoxMesh color="hotpink" speed={0.02} args={[2,3,1]} position={[5,0,2]}/> */}
        {/* <OrbitControls /> */}
    </Canvas>
  )
}

export default Three