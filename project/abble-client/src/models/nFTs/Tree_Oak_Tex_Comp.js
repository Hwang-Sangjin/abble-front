/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function ModelTree({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Characters/Models/Tree_Oak_Tex_256.gltf')
  const bakedTexture = useTexture('/Characters/Textures/Tree_Oak_Tex_256.png')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Tree_Oak_Tex_Comp.geometry} material={materials.Mat_Tree_Oak_Comp}>
        <meshStandardMaterial map={bakedTexture} map-flipY={false}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Tree_Oak_Tex_Comp.gltf')
