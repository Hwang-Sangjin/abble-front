import { useBox, usePlane } from "@react-three/cannon"
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { NearestFilter } from "three";
import { RepeatWrapping } from "three";
import { LinearMipMapLinearFilter } from "three";
import { TextureLoader } from "three"
import { useStore } from "../hooks/useStore";

import grass from '../images/grass.jpg';

// 사용자가 이거 모델 바꿀 수 있게 하면 좋겠다. 지금 만들기엔 투머치이려나? 안그래도 할거 많은디.
export const Ground = (props) => {
    // const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}))
    const [ref] = useBox(() => ({
        type: 'Static',
        position: [0,0,0],
        rotation: [Math.PI/2,0,0], // 넘겨줄때 돌려놓자. 유니티랑 플립이 다르네.
    }))
    // 선택한 텍스쳐와 연결되는 Model 생성
    const [addModel, activeTexture] = useStore((state) => [
        state.addModel,
        state.texture,
        state.nft,
    ]);

    const { nodes, materials } = useGLTF('/models/nFTs/Tree_Oak_Tex_Comp.gltf')
    const bakedTexture = useTexture('/models/textures/Tree_Oak_Tex_256.png')

    // 터레인 깔때 심리스 텍스쳐용도인데 딱히 필요 없을 듯?
    // const texture = new TextureLoader().load(grass);
    // texture.magFilter = NearestFilter;
    // texture.minFilter = LinearMipMapLinearFilter;
    // texture.wrapS = RepeatWrapping;
    // texture.wrapT = RepeatWrapping;
    // texture.repeat.set(100, 100);

    return (
        <mesh
            scale={[10,10,10]}
            ref = {ref}
            receiveShadow
            geometry={nodes.Tree_Oak_Tex_Comp.geometry} 
            material={materials.Mat_Tree_Oak_Comp}
            onClick={(e) => {
            e.stopPropagation();
            const [x, y, z] = Object.values(e.point).map((coord) =>
                Math.ceil(coord),
            );
            addModel(x, y, z, activeTexture);
            }}
        >
            <meshStandardMaterial map={bakedTexture} map-flipY={false}/>
        </mesh>       
    )
}