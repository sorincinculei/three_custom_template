import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import img from '../../../publish/grunge-wall-texture.jpeg'

const Floor = () => {
    const texture = new THREE.TextureLoader().load(img)

    const material = useRef()

    const color = new THREE.Color(0.6392156862745098, 0.5176470588235295, 0.3568627450980392)

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeBufferGeometry args={[4000, 4000]}/>
            <meshStandardMaterial attach='material' ref={material} map={texture} color={0xffffff} side={THREE.DoubleSide}/>
        </mesh>
    )
}

export default Floor