/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'


export default function ModelAnim({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Characters/Models/Character_Deer_Comp_anim.gltf')
  const { actions } = useAnimations(animations, group)
  const bakedTexture = useTexture('/Characters/Textures/Character_Deer_Texture_1024.png')

  // useEffect(() => {
  //   // actions.Deer_Dodge?.play()
  //   // return actions.Deer_Dodge?.reset()
    
  //   // actions.Deer_Gun_Idle?.play()
  //   // return actions.Deer_Gun_Idle?.reset()

  //   // Neck 조인트도 구현해주자.
  // }, [])

  // console.log(animations);
  //   console.log(group);
  //   console.log(actions);





  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Root} />
      <primitive object={nodes.LegIKL} />
      <primitive object={nodes.PoleTargetL} />
      <primitive object={nodes.LegIKR} />
      <primitive object={nodes.PoleTargetR} />
      <skinnedMesh
        geometry={nodes.Character_Deer_Comp.geometry}
        material={materials.Mat_Character_Deer_Comp}
        skeleton={nodes.Character_Deer_Comp.skeleton}
      >
        <meshStandardMaterial map={bakedTexture} map-flipY={false}/>
      </skinnedMesh>
    </group>
  )
}

useGLTF.preload('/Character_Deer_Comp_anim.gltf')









