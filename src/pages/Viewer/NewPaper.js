import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

import img from '../../../publish/whatsapp_map.jpeg'

const NewPaper = () => {
    const material = useRef()
    const texture = new THREE.TextureLoader().load(img)

    const width = 400
    const height = 400
    const depth = 12

    return (
        <mesh position={[0, height / 2, 0]} castShadow>
            <boxBufferGeometry args={[width, height, depth]} />
            <meshStandardMaterial attach='material' ref={material} map={texture} color={0xffffff} side={THREE.DoubleSide}/>
        </mesh>
    )
}

export default NewPaper