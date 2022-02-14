import { useFrame, useThree } from "@react-three/fiber";
import {useState, useEffect} from 'react';
import { useStore } from '../../hooks/useStore';
import * as textures from '../../assets/textures';

// ui는 전부다 box로 감. 해커톤 끝나고 계속 진행되면 그때 htm으로 바꾸면 됨.
// count : 임시값 6 주면 됨.
const Material = ({args, color, tileTexture, isActive, count, ...props}) => {
    // const boxRef = ref; // useRef() 이거 받아주는게 의미 있을까? 쓸일이 없을 것 같은데. 구지 쓸라카면 forwardRef로 받아줘야할건데 딱히? 일단 고민. 쓸일 있으면 쓰것지.
    return (
        <mesh {...props}>
            <boxBufferGeometry attach="geometry" args={args} />
            {[...Array(count)].map((_, index) => { // 허드 텍스쳐 숫자 많아지면 어레이 키우면 됨.
                return (
                    <meshStandardMaterial
                        attachArray="material"
                        map={tileTexture}
                        key={index}
                        transparent={true}
                        opacity={isActive ? 1 : 0.3}
                    />
                )
            })}
        </mesh>
    )
}

const MaterialContainer = ({args, color, activeTileTexture, ...props}) => {
    const activeTileTextureIndex = Object.keys(textures).indexOf(activeTileTexture);
    
    return(
        <mesh {...props}>
            {Object.keys(textures).map((key, index) => {
                return (
                <Material
                    key={key}
                    count={6}
                    isActive={activeTileTextureIndex === index}
                    tileTexture={textures[key]}
                    args={[0.2, 0.2, 0.05]}
                    position={[-0.5 + index / 4, 0, 0.01]} // 오브젝트 간격
                />
                );
            })}
            <boxBufferGeometry attach="geometry" args={args} />

            <meshStandardMaterial
            attach="material"
            color={color}
            transparent={true}
            />
        </mesh>
        
    )
}

export const Hud = ({position}) => {
    const { camera } = useThree();
    const [hudState, setHudState] = useState(() => ({
        position: camera.position,
        rotation: [0,0,0],
        opacity: 0,
    }));
    const [hudVisible, setHudVisible] = useState(false);
    const [activeTileTexture] = useStore((state) => [state.tileTexture]); // Store 이걸 DB로 바꾸면 됨. Store가 개인이 가지고 있는 NFT와 게임 아이템임. 우리가 들고있다가 넘겨주는 식으로 주면 될듯. state로 관리.
    useFrame(() => {
        // 항상 카메라 정면 출력. 이대로 두면 ui가 휙 날아옴. 화면 이동이 완료된 후 출력되길 원하면 opacity를 timeout해주거나 position이 원하는 위치에 왔을때 visible을 켜줘버리면 됨.
        const {x,y,z} = camera.position;
        const {x: rotX, y: rotY, z: rotZ} = camera.rotation;
        setHudState({
            position: [x,y,z],
            rotation: [rotX, rotY, rotZ],
            opacity: hudVisible ? 1: 0,
        })
    })

    useEffect(() => {
        setHudVisible(true);
        const hudVisibilityTimeout = setTimeout(() => {
            setHudVisible(false);
        }, 2000); // 2초뒤 꺼짐.
        return () => {
            clearTimeout(hudVisibilityTimeout);
        }
    }, [setHudVisible, activeTileTexture]);
    return (
        <>
            {
                hudVisible && (
                    <group position={hudState.position} rotation={hudState.rotation}>
                        <group position={position}>
                            <MaterialContainer
                                args={[1.3, 0.3, 0.01]} // 동적 사이즈 구현해야함.
                                color="#222"
                                activeTileTexture={activeTileTexture}
                                hudVisible={hudVisible}
                            />
                        </group>
                    </group>
                )
            }
        </>   
    )
}