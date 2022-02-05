/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelTest8({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/seedTest1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Bush_Comp.geometry} material={materials.Mat_Bush_Comp} position={[6.99, 0, -1.37]} />
    </group>
  )
}

useGLTF.preload('/seedTest1.gltf')