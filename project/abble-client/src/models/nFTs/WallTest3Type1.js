/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelTest15({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/wallTest3Type1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Wall_Edge_RightAngle_Comp.geometry}
        material={materials.Mat_Wall_Edge_RightAngle_Comp}
        position={[4.89, -0.06, -15.07]}
      />
    </group>
  )
}

useGLTF.preload('/wallTest3Type1.gltf')
