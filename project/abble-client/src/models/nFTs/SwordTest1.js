/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelTest10({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/swordTest1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Boss_AM_Sworld_Comp.geometry}
        material={materials.Mat_Boss_AM_Sworld_Comp}
        position={[-7.86, 0.06, 5.76]}
      />
    </group>
  )
}

useGLTF.preload('/swordTest1.gltf')
