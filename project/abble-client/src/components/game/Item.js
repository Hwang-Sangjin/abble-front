import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import { useState, memo, useRef, useEffect } from 'react';
import * as textures from '../../assets/textures';

const Item = ({ position, item, addItem, removeItem }) => {

    const [hover, setHover] = useState(null);

    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))

    const { nodes, materials } = useGLTF(`/models/nFTs/${item}.gltf`);
    const bakedTexture = useTexture(`/models/textures/${item}.png`);
    const itemGeo = Object.keys(nodes)[1];
    const itemMat = Object.keys(materials)[0];

    // 아이템별 능력.
    function modelChange(e) {
        e.eventObject.scale.z = e.eventObject.scale.z + 0.1;
    }

    return (
        <mesh
            className="itemMesh"
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setHover(Math.floor(e.faceIndex / 2));
            }}
            onPointerOut={() => {
                setHover(null);
            }}
            position={[0,0.5,0]}
            rotation={[Math.PI/2,0,0]}
            castShadow
            geometry={itemGeo}
            material={itemMat}
            onClick={(e) => {
                e.stopPropagation();
                modelChange(e);
            }}
        >
            <meshStandardMaterial 
                map={bakedTexture}
                opacity={hover!=null ? 0.7 : 1}
                transparent={true} 
            />
        </mesh>
    )
}

export default memo(Item);     