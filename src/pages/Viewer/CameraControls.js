import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export const CameraControls = props => {

  useEffect(() => {
    document.getElementsByTagName('canvas')[0].addEventListener('wheel', onDocumentMouseWheel, false)
  }, [])

  function onDocumentMouseWheel (event) {
    const fov = camera.fov + event.deltaY * 0.05

    camera.fov = THREE.MathUtils.clamp(fov, 5, 75)

    console.log(fov)
    if (fov < 25) return null

    camera.updateProjectionMatrix()
  }

  const {
    camera,
    gl: { domElement }
  } = useThree()

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef()

  useFrame(() => controls.current.update())

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableDamping
      enableZoom
      minDistance={0.0001}
      maxDistance={0}
      enablePan={false}
      dampingFactor={0.1}
      rotateSpeed={-1}
      {...props}
      // target={[0, 0, 0]}
    />
  )
}

export default CameraControls
