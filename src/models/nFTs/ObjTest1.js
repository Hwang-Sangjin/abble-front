/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelTest3({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/objTest1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Architexure_Type01_Comp.geometry}
        material={materials.Mat_Architexure_Type01_Comp}
        position={[34.53, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/objTest1.gltf')
