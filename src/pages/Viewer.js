import React, { useEffect, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { connect } from 'react-redux'

import CameraControls from './Viewer/CameraControls'

import Sky from './Viewer/Sky'
import Floor from './Viewer/Floor'
import NewPaper from './Viewer/NewPaper'
import Phrase from './Viewer/Phrase'

import lightmap from '../../publish/lightmap.json'
import _ from 'lodash'

const Viewer = ({pharses}) => {

    console.log(pharses)

    useEffect(() => {
        // const loader = new THREE.ObjectLoader()
        // console.log(lightmap)
        // loader.parse( lightmap, function ( object ) {
        //     console.log(object)
        // })
    })

    const onCreatedCanvas = c => {
        const {gl} = c
        gl.alpha = true
        gl.shadowMapCullFace = THREE.CullFaceFrontBack
    }

    return (
        <Canvas shadowMap onCreated={onCreatedCanvas} camera={{position: [700, 200, -500], fov: 40, far: 10000}}>
            <directionalLight
                color={0xffffff}
                intensity={0.8}
                position={[4000, 250, -500]}
                castShadow
                shadow-mapSize-width={5000}
                shadow-mapSize-height={5000}
                shadow-camera-left={-5000}
                shadow-camera-right={5000}
                shadow-camera-bottom={-5000}
                shadow-camera-top={5000}
                shadow-camera-far={8000}
                shadow-camera-visible={true}
            />
            <ambientLight
                color={0xffffff}
                intensity={0.3}
            />
            <Sky />
            <NewPaper />
            <Phrase data={pharses} />
            <Floor />
            <CameraControls maxDistance={10000} maxPolarAngle={0.9 * Math.PI / 2} enableZoom={false}/>
        </Canvas>
    )
}

const mapStateToProps = state => ({
    pharses: state.pharses,
})

export default connect(mapStateToProps)(Viewer)