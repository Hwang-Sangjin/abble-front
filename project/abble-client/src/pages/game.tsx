import React, { useEffect, useState } from 'react'
// import GameSection from '../components/gameSection'
import {Game} from '../components/game';
import { JoinRoom } from '../components/joinRoom';
import GameContext, { IGameContextProps } from "../contexts/gameContext";
import ChatContext, { IChatContextProps } from "../contexts/chatContext";



const GamePage = () => {

  const [isInRoom, setInRoom] = useState(false);
  const [playerPosition, setPlayerPosition] = useState<[number,number,number]>([0,0,0]);
  const [playerAvatar, setPlayerAvatar] = useState<string>("cube");

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerPosition,
    setPlayerPosition,
    playerAvatar,
    setPlayerAvatar,
  }

  const [message, setMessage] = useState<string>("");

  const chatContextValue: IChatContextProps = {
    message,
    setMessage,
  }

  return (
    // <GameSection/>
    <GameContext.Provider value={gameContextValue}>    
      <ChatContext.Provider value={chatContextValue}>
        {isInRoom ? <Game/> : <JoinRoom/>}
      </ChatContext.Provider>
    </GameContext.Provider>
  )
}

export default GamePage