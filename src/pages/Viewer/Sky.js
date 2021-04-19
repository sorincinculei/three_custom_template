import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

import img from '../../../publish/background.jpeg'

const Sky = () => {
    const material = useRef()
    const texture = new THREE.TextureLoader().load(img)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    
    const fragmentShader = `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;

        varying vec3 vWorldPosition;

        void main() {

            float h = normalize( vWorldPosition + offset ).y;
            gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );

        }
    `
    const vertexShader = `
        varying vec3 vWorldPosition;

        void main() {

            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;

            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

        }
    `

    const data = useMemo(
        () => ({
            uniforms: {
                topColor: { value: new THREE.Color( 0x0077ff ) },
                bottomColor: { value: new THREE.Color( 0xffffff ) },
                offset: { value: 400 },
                exponent: { value: 0.6 }
            },
            fragmentShader,
            vertexShader
        }),
        []
    )

    return (
        <mesh>
            <sphereBufferGeometry attach='geometry' args={[4000, 32, 15]}/>
            {/* <shaderMaterial {...data} side={THREE.DoubleSide}/> */}
            <meshBasicMaterial attach='material' ref={material} map={texture} color={0xffffff} side={THREE.DoubleSide}/>
        </mesh>
    )
}

export default Sky