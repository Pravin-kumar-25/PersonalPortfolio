import React, { useRef,useState } from 'react'
import { useFrame } from '@react-three/fiber'
// import { TextureLoader } from 'three';
import { useSpring, a } from "@react-spring/three";
// import blueTexture from '../../Utils/Textures/texture.jpg'


const BoxMesh = ({ color, speed, args, position, isCircle }) => {
    // const [image] = useLoader(TextureLoader,[blueTexture]);
    const meshRef = useRef(null);
    const [expand, setexpand] = useState(false)

    const props = useSpring({
        scale: expand ? [1.2,1.2,1.2] : [1,1,1]
    })

    useFrame(() => (meshRef.current.rotation.x = meshRef.current.rotation.y += speed))
    return (
        <a.mesh
        onClick={()=>setexpand(!expand)}
        rotation={[-Math.PI/2,0,0]}
            ref={meshRef}
            position={position}
            // castShadow
            scale={props.scale}
        >
            {isCircle ? <cylinderBufferGeometry attach='geometry' args={args} color={color} /> :
                <boxBufferGeometry attach='geometry' args={args} />
            }
            <meshStandardMaterial attach='material' color={color} />
        </a.mesh>
    )
}

export default BoxMesh