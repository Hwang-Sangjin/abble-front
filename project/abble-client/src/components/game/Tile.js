import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import { useState, memo, useRef, useEffect } from 'react';
import * as textures from '../../assets/textures';


const Tile = ({ position, texture, addTile, removeTile }) => {

    const [hover, setHover] = useState(null);

    // 네모난 콜리젼을 만들어서 충돌 체크
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))

    const color = texture === 'glass' ? 'skyblue' : 'white';
    return (
        <mesh
            castShadow
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setHover(Math.floor(e.faceIndex / 2));
            }}
            onPointerOut={() => {
                setHover(null);
            }}
            onClick={(e) => {
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex / 2);
                const { x, y, z } = ref.current.position;
                // console.log(clickedFace); // 걍 blender에서 Face나눠서 넘겨줄까? 성능면에서는 드럽게 안좋은데 코딩하긴 편할것 같은디.. 흠 고민좀 해보세.
                // TODO : 모델이 크면 세그먼트가 늘어나므로 분기점 만들어줘야함. 3개 정도로 할까? 3개만 해도 인덱스가 14개 아닌가? 일단 1,1,1 박스로 시작. 세그먼트는 걍 fiber에서 boxbuffergeometry args 1,3,1 처럼 만들면 알아서 잘라준다. 1사이즈 기준으로 잘라주는것 같음. 내가 직접 안잘라도 될 듯.
                // TODO : key Event말고 UI로 변경해야함.
                if (clickedFace === 0) {
                    e.altKey ? removeTile(x, y, z) : addTile(x + 1, y, z);
                    return;
                }
                if (clickedFace === 1) {
                    e.altKey ? removeTile(x, y, z) : addTile(x - 1, y, z);
                    return;
                }
                if (clickedFace === 2) {
                    e.altKey ? removeTile(x, y, z) : addTile(x, y + 1, z);
                    return;
                }
                if (clickedFace === 3) {
                    e.altKey ? removeTile(x, y, z) : addTile(x, y - 1, z);
                    return;
                }
                if (clickedFace === 4) {
                    e.altKey ? removeTile(x, y, z) : addTile(x, y, z + 1);
                    return;
                }
                if (clickedFace === 5) {
                    e.altKey ? removeTile(x, y, z) : addTile(x, y, z - 1);
                    return;
                }
            }}
        >
            <boxBufferGeometry
                attach="geometry"
                args={[1, 1, 1]}
            />
            <meshStandardMaterial
                attach="material"
                map={textures[texture]}
                color={hover != null ? 'gray' : color}
                opacity={texture === 'glass' ? 0.7 : 1}
                transparent={true}
            />
        </mesh>


    )
}

function equalProps(prevProps, nextProps) {
    const equalPosition =
        prevProps.position.x === nextProps.position.x &&
        prevProps.position.y === nextProps.position.y &&
        prevProps.position.z === nextProps.position.z;

    return equalPosition && prevProps.texture === nextProps.texture;
}

export default memo(Tile, equalProps);     