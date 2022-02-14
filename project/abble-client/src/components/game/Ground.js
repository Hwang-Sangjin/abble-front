import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useStore } from '../../hooks/useStore';
import { TextureLoader, RepeatWrapping, NearestFilter, LinearMipMapLinearFilter } from 'three';

import grass from '../../images/grass.jpg';

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  // F-1 : Ground 텍스쳐 변경.
  const groundTexture = new TextureLoader().load(grass);

  const [addTile, activeTileTexture] = useStore((state) => [
    state.addTile,
    state.tileTexture,
  ]);
  groundTexture.magFilter = NearestFilter;
  groundTexture.minFilter = LinearMipMapLinearFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(50, 50); // 50*50 사이즈.
  return (
    <group>
      <mesh
        ref={ref}
        receiveShadow
        onClick={(e) => {
          e.stopPropagation();
          const [x, y, z] = Object.values(e.point).map((coord) =>
            Math.ceil(coord),
          );
          addTile(x, y, z, activeTileTexture);
        }}
      >
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshStandardMaterial map={groundTexture} attach="material" />
      </mesh>

      {/* 이그드라실 - 컴포넌트 분리시켜야함. */}
      <mesh position={[0,5,0]}>
        <boxBufferGeometry args={[1,10,1]}/>
        <meshStandardMaterial color="#964B00"/>
      </mesh>
      <mesh position={[0,10,0]}>
        <icosahedronBufferGeometry args={[5,0]}/>
        <meshStandardMaterial color="green"/>
        <mesh position={[5,0,0]}>
          <icosahedronBufferGeometry args={[3,0]}/>
          <meshStandardMaterial color="green"/>
        </mesh>
        <mesh position={[3,-1,3]}>
          <icosahedronBufferGeometry args={[3,0]}/>
          <meshStandardMaterial color="green"/>
        </mesh>
        <mesh position={[-2,0,4]}>
          <icosahedronBufferGeometry args={[2,0]}/>
          <meshStandardMaterial color="green"/>
        </mesh>
        <mesh position={[-4,-2,3]}>
          <icosahedronBufferGeometry args={[4,0]}/>
          <meshStandardMaterial color="green"/>
        </mesh>
        <mesh position={[-3,-3,-3]}>
          <icosahedronBufferGeometry args={[3.5,0]}/>
          <meshStandardMaterial color="green"/>
        </mesh>
      </mesh>
    </group>
    
  );
};
