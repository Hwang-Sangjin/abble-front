import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { JoinRoom } from "../joinRoom";
import {Ground} from "./Ground";
import Tiles from './Tiles';
import { Player } from './Player';
import { Hud } from './Hud';
import { ItemUI } from './ItemUI';
import gameContext from "../../contexts/gameContext";
import socketService from "../../services/socketService";
import gameService from "../../services/gameService";
import { Chat } from '../chat/Chat';

export function Game() {
    const [spawnPoint, setSpawnPoint] = useState([0,0,0]);

    return (
        <>
            <JoinRoom/>
            <Canvas>
                <Sky sunPosition={[100, 20, 100]}/>    
                <ambientLight intensity={0.25} />
                <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />

                <Hud position={[0,0,-2]}/>
                <ItemUI position={[0,0.5,-3]}/>
                <Chat />
                <OrbitControls/>
                <Physics>
                    <Debug color="green" scale={1.1}>
                        <Ground />
                        {/* F-2 : 플레이어 스폰 포지션 랜덤 배정. */}
                        <Player 
                            position={spawnPoint}
                        /> 
                        <Tiles />
                    </Debug>
                </Physics>
            </Canvas>
            
            {/* <div className="playStopper">

            </div> */}
        </>
    );
}