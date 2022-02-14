import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "../../hooks/useKeyboardControls"
import { Vector3 } from "three";
import gameContext from "../../contexts/gameContext";
import socketService from "../../services/socketService";
import gameService from "../../services/gameService";

// 하.. 타입스크립트로 할라니까 개빡시네. 일단 빨리 해야되니까 js로 다시 돌림.
// export type IPlayerPosition = [number,number,number];
// // export interface IStartGame {
// //   start: boolean;
// //   avatar: "사슴" | "사자";
// //   movement: [0,0,0];
// // }
// export type IPlayerAavtar = string;


const SPEED = 6;

// F-8 : 로컬 플레이어, 원격 플레이어 분리.
export const Player = (props) => {

    // const { camera } = useThree();

    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump,
    } = useKeyboardControls();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props,
    }));
    
    // F-7 : 플레이어 스폰 위치
    // F-10 : 플레이어 위치 동기화. 
    const { playerPosition, setPlayerPosition } = useContext(gameContext);
    const [ pos, setPos] = useState(playerPosition);

    const updatePosition = (position) => {
        if(socketService.socket){
            gameService.updateGame(socketService.socket, position);
        };
    }

    // F-9 : 아바타 구현
    const { playerAvatar, setPlayerAvatar } = useContext(gameContext);
    const [ avatar, setAvatar] = useState(playerAvatar);

    const updateAvatar = (avatar) => {
        if(socketService.socket){
            gameService.updateAvatar(socketService.socket, avatar);
        }
    }

    useEffect(() => {
        updatePosition(playerPosition);
        updateAvatar(playerAvatar);
    }, [])
    
    const handleGameUpdate = () => {
        if(socketService.socket){            
            gameService.onGameUpdate(socketService.socket, (position) => {
                setPlayerPosition(position);
            });

            gameService.onAvatar(socketService.socket, (avatar) => {
                setPlayerAvatar(avatar);
            })
        }

        
    }
    
    useEffect(() => {
        handleGameUpdate();
    }, [api.position])





    const velocity = useRef([0,0,0]);
    const position = useRef([0,0,0]);
    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v));
        api.position.subscribe((v) => (position.current = v));
    }, [api.velocity, api.position]);

    useFrame(() => {
        // camera.position.copy(ref.current.position);
        const direction = new Vector3();
        const rotation = new Vector3();
        
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
        );
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0,
        );

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED);
            // .applyEuler(camera.rotation); // 1인칭 할때는 이거 활성화 시키고 FPV컨트롤러 구현하면 됨.
        
        api.velocity.set(direction.x, velocity.current[1], direction.z);
        // D-1 : 캐릭터 움직이는 방향대로 바라보기. 그냥 때굴때굴 굴러가는것도 귀여운듯? 캐릭터 똥그랗거나 네모낳게 만들어도 되고 막 포켓몬스터볼에 든것처럼 캐릭터가 안에서 때굴때굴 굴러도 되고 좋은디? 오일러로 퉁치면 짐벌락 터질거고... 쿼터니언은 계산하기 귀찮고... 개발이 편하면서도 귀엽고 깜찍하네? 이거 말씀드려야겠네잉.
        // api.rotation.set(rotation.x, rotation.y, rotation.z);

        if(jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05){ // 잘안되면 수치 올리면 됨.
            api.velocity.set(velocity.current[0], 8, velocity.current[2]);
        }

        // console.log(position.current);
        // BF-1 : 아바타 이동 데이터 최적화.
        updatePosition(position.current); // 너무 많이 보낸다. 이거 최적화해야함.
        // console.log(socketService.socket.io);
    });

    return (
        <>
            <mesh
                ref={ref}
            >
                <boxBufferGeometry args={[1,1,1]}/>
                <meshStandardMaterial color="red"/>
            </mesh>
        </>
    )
}