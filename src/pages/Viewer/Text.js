import React from 'react'
import * as THREE from 'three'

const Text = ({data, index, size, font}) => {

    const textOptions = {
        font,
        size: 30,
        height: 4
    }

    const startAngle = 2 * index * Math.PI /size
    const endAngle = 2 * Math.PI /size
    
    const title = _.get(data, 'title')
    const vote = _.toString(_.get(data, 'votes'), 0)

    console.log(startAngle, vote, title)

    const orginP = new THREE.Vector3(250, 0, 0)
    orginP.applyAxisAngle ( new THREE.Vector3(0, 1, 0), startAngle ) 

    return (
        <group scale={[2, 3, 2]} rotation={[0, startAngle, 0]} position={[orginP.x, orginP.y, orginP.z]}>
            <mesh position={[50, 0, 0]} castShadow>
                <textGeometry args={[title, textOptions]} hAlign="left"/>
                <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
            </mesh>
            <mesh castShadow>
                <textGeometry args={[vote, textOptions]} hAlign="left" />
                <meshStandardMaterial color={0xffff00} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Text