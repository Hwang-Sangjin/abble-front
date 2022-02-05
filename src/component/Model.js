import { useBox } from "@react-three/cannon";
import { useGLTF, useTexture } from "@react-three/drei";
import {useState, memo, useRef, useEffect} from 'react';
import * as textures from '../textures';
// import * as ngtModels from '../nftModels';
import * as nftModels from '../nftModels';


const Model = ({position, texture, nft, addModel, removeModel}) => {

    const [hover, setHover] = useState(null);

    // 네모난 콜리젼을 만들어서 충돌 체크
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))

    // 애초에 만들때 모델 생성 위치를 잡아줄까? 걍 왼쪽에서 자라는거 위쪽에서 자라는거 만들어서 줄까?
    // 흠............................................... 시간 남으면 만들어드리고 오늘도 너무 늦을것 같으면 걍 이건 패쓰. 코드리뷰하면서 설명드리면 될 듯.
    function modelChange(e) {
        console.log(e);
        // e.eventObject.visible = false; // visible 끄는게 컴포넌트 날리는것 같은디? 이거 좀 더 자세히 알아봐야함. 2시간 정도 켜놨는데 메모리 누수는 일단 없는듯. 몇일 켜놓고 테스트 해봐야함.
        // 성장하면 기존 모델 날리고 새로운 모델로 교체하는 식으로 가는게 좋을 듯.
        // 최우선 작업. 이게 NFT임.

        // 설명드리려고 만든거. 이거 다른 모델로 계속 바꿀꺼임.
        e.eventObject.scale.z = e.eventObject.scale.z + 0.1;
        
    }

    // 이거 파일 이름 맞춰서 보냈어야 하네. 벨리데이션하기 쉽그로.
    // nftMarket.js에서 안가져와도 됬겠네.
    // const { nodes, materials } = useGLTF(`/models/nFTs/${nft}.gltf`); // 이렇게 했어야되네... 언제 바꾸지.
    const { nodes, materials } = useGLTF('/models/nFTs/Tree_Oak_Tex_Comp.gltf')
    // console.log(Object.keys(nodes)[1]);
    // console.log(Object.keys(materials)[0]);
    // const bakedTexture = useTexture('/models/textures/Tree_Oak_Tex_256.png')
    const bakedTexture = useTexture(`/models/textures/${nft}.png`);
    const nftGeo = Object.keys(nodes)[1];
    const nftMat = Object.keys(materials)[0];



    const color = texture === 'glass' ? 'skyblue' : 'white';
    return (
        <group
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
                e.altKey ? removeModel(x, y, z) : addModel(x + 1, y, z);
                return;
                }
                if (clickedFace === 1) {
                e.altKey ? removeModel(x, y, z) : addModel(x - 1, y, z);
                return;
                }
                if (clickedFace === 2) {
                e.altKey ? removeModel(x, y, z) : addModel(x, y + 1, z);
                return;
                }
                if (clickedFace === 3) {
                e.altKey ? removeModel(x, y, z) : addModel(x, y - 1, z);
                return;
                }
                if (clickedFace === 4) {
                e.altKey ? removeModel(x, y, z) : addModel(x, y, z + 1);
                return;
                }
                if (clickedFace === 5) {
                e.altKey ? removeModel(x, y, z) : addModel(x, y, z - 1);
                return;
                }
            }}
        >
            <mesh
                castShadow
            >
                <boxBufferGeometry 
                    attach="geometry" 
                    args={[1,1,1]} 
                />
                <meshStandardMaterial 
                    attach="material" 
                    map={textures[texture]} 
                    color={hover!=null ? 'gray' : color} 
                    opacity={texture === 'glass' ? 0.7 : 1} 
                    transparent={true} 
                />
            </mesh>
            <mesh
                // postion, rotation 인자로 받아서 원점이랑 각도 틀어주는게 더 나을듯.
                // 이렇게 하려면 임마도 바닥 생성될때 storage에 해당 위치값과 로테이션 저장해줘야한다.
                // 좀 투머치 아닌가? 고민.
                // 걍 모델 원점이랑 회전값을 아예 지정해주는게 편하긴 한데... 흠
                // position={[0,0,-0.5]}
                // rotation={[0,0,0]}
                className="nftMesh"
                position={[0,0.5,0]} // 이거
                rotation={[Math.PI/2,0,0]} // 이거
                castShadow
                geometry={nodes.Tree_Oak_Tex_Comp.geometry} // 이거랑
                material={materials.Mat_Tree_Oak_Comp} // 이거 바꿔주면 됨.
                onClick={(e) => {
                    e.stopPropagation();
                    modelChange(e);
                }}
            >
                <meshStandardMaterial map={nftModels[nft]}/>
            </mesh>
        </group>
        
    )
}

function equalProps(prevProps, nextProps) {
    const equalPosition =
      prevProps.position.x === nextProps.position.x &&
      prevProps.position.y === nextProps.position.y &&
      prevProps.position.z === nextProps.position.z;
  
    return equalPosition && prevProps.texture === nextProps.texture;
  }

  useGLTF.preload('/Tree_Oak_Tex_Comp.gltf')
export default memo(Model, equalProps);     