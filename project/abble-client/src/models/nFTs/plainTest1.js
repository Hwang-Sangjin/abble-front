/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelTest6({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/plainTest1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Active_BomberAirPlain_Comp.geometry}
        material={materials.Mat_Active_BomberAirPlain_Comp}
        position={[-6.77, 0.02, 5.68]}
      />
    </group>
  )
}

useGLTF.preload('/plainTest1.gltf')