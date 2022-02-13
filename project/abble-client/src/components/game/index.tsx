import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useState } from "react";
import { JoinRoom } from "../joinRoom";
import {Ground} from "./Ground";
import Tiles from './Tiles';
import { Player } from './Player';
import { Hud } from './Hud';
import { ItemUI } from './ItemUI';
import gameContext from "../../contexts/gameContext";
import socketService from "../../services/socketService";
import gameService from "../../services/gameService";

export type IPlayMovement = [Number,Number,Number] | null;
export interface IStartGame {
  start: boolean;
  avatar: "사슴" | "사자";
  movement: [0,0,0];
}

export function Game() {
    const [playerPosition, setPlayerPosition] = useState<IPlayMovement>(
        null,
      );

    // 아바타 생성부 만들어줘야함. 모델 가져올 시간없음. 일단 소켓 테스트하고 모델 가져오면서 테스트 고고.
    const { playerAvatar, setPlayerAvatar } = useContext(gameContext);

    // useFrame((time) => {
    //     if(socketService.socket){
    //         gameService.updateGame(socketService.socket, [1,1,1]); // 위치값에 아바타 넣으면 됨.
    //     }
    // })

    // const handleGameUpdate = () => {
    //     if(socketService.socket){
    //         gameService.onGameUpdate(socketService.socket, (position) => {
    //             setPlayerPosition(position);
    //         })
    //     }
    // }

    // use Frame에서 처리하면 됨. 일단 테스트는 해야되서 Effect에 넣어놓음.
    // useEffect(() => {
    //     handleGameUpdate();
    // }, []);

    return (
        <>
            <JoinRoom/>
            <Canvas>
                <Sky sunPosition={[100, 20, 100]}/>    
                <ambientLight intensity={0.25} />
                <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />

                <Hud position={[0,0,-2]}/>
                <ItemUI position={[0,0.5,-3]}/>
                <OrbitControls/>
                <Physics>
                    <Debug color="green" scale={1.1}>
                        <Ground />
                        <Player />
                        <Tiles />
                    </Debug>
                </Physics>
            </Canvas>
            
            {/* <div className="playStopper">

            </div> */}
        </>
    );
}